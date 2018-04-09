import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiKeyService} from '../../../common/services/api-key-service/api-key.service';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-add-api-key',
    templateUrl: './add-api-key.component.html',
    styleUrls: ['./add-api-key.component.css']
})
export class AddApiKeyComponent implements OnInit {
    apiKeyObject: any;
    apiKey?: string;
    @Output() fnHideModal = new EventEmitter<any>();

    constructor(private _apiKey: ApiKeyService, private _toastr: ToastrService) {
        this.apiKeyObject = {
            secret: '',
            description: ''
        };
        this.apiKey = '';
    }

    ngOnInit() {
    }

    fnAddApiKey(e, apiKeyObject) {
        e.preventDefault();
        e.stopPropagation();
        this._apiKey.fnCreateApiKey(apiKeyObject)
            .then(response => {
                if (response && response['account-authentication-token-id']) {
                    this.apiKey = response['account-authentication-token-id'];
                }
                this._toastr.fnSuccess('Api key created successfully.');
            });
    }

    fnCloseModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.fnHideModal.next();
    }

}
