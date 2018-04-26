import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiKeyService} from '../../../common/services/api-key-service/api-key.service';
import {ToastrService} from '../../../common/services/toastr.service';
import * as _ from 'lodash';
import {AuthService} from '../../../common/services/auth-service/auth.service';

@Component({
    selector: 'app-add-api-key',
    templateUrl: './add-api-key.component.html',
    styleUrls: ['./add-api-key.component.css']
})
export class AddApiKeyComponent implements OnInit {
    apiKeyObject: any;
    apiKeys: any;
    apiKey?: string;
    isLoading?: boolean;
    isDarkMode?: boolean;
    @Output() fnHideModal = new EventEmitter<any>();

    constructor(private _apiKey: ApiKeyService, private _toastr: ToastrService, private _auth: AuthService) {
        this.apiKeyObject = {
            secret: '',
            description: ''
        };
        this.apiKey = '';
        this.isLoading = false;
        this.apiKeys = [];
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
    }

    ngOnInit() {
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this.apiKeys = this._apiKey.getApiKeys();
    }

    fnAddApiKey(e, apiKeyObject) {
        e.preventDefault();
        e.stopPropagation();
        this.isLoading = true;
        this._apiKey.fnCreateApiKey(apiKeyObject)
            .then(response => {
                if (response && response['account-authentication-token-id']) {
                    this.apiKey = response['account-authentication-token-id'];
                }
                if (!_.isEmpty(this.apiKeys)) {
                    this._apiKey.fnGetApiKeys();
                }
                this.isLoading = false;
                this._toastr.fnSuccess('Api key created successfully.');
            }).catch(error => {
                this.isLoading = false;
        });
    }

    fnCloseModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.fnHideModal.next();
    }

}
