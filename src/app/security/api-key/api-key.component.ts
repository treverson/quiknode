import {Component, OnInit} from '@angular/core';
import {ApiKeyService} from '../../common/services/api-key-service/api-key.service';
import {UserService} from '../../common/services/user-service/user.service';
import * as _ from 'lodash';
import {ToastrService} from '../../common/services/toastr.service';
import {AuthService} from '../../common/services/auth-service/auth.service';

@Component({
    selector: 'app-api-key',
    templateUrl: './api-key.component.html',
    styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {
    apiKeys: string[];
    users: any[];
    apiKeyObject: any;
    currentUser: string;
    selectedUser: string;

    constructor(private _api: ApiKeyService, private _user: UserService, private _toastr: ToastrService,
                private _auth: AuthService) {
        this.users = [];
        this.apiKeyObject = {
            secret: '',
            description: ''
        };
        this.currentUser = this._auth.fnGetUserId();
        this.selectedUser = _.clone(this.currentUser);
    }

    ngOnInit() {
        this.currentUser = this._auth.fnGetUserId();
        this.selectedUser = _.clone(this.currentUser);
        this.users = this._user.fnGetUserList();
        this.apiKeys = this._api.getApiKeys();

        if (_.isEmpty(this.apiKeys)) {
            this.fnGetApiKeys();
        }
        if (_.isEmpty(this.users)) {
            this._user.fnGetUsers().then((response: any) => {
                if (response && !_.isEmpty(response.users)) {
                    this.users = response.users;
                }
            });
        }
    }

    fnGetApiKeys() {
        this._api.fnGetApiKeys().then(response => {
            if (response && response['account-authentication-tokens']) {
                this.apiKeys = response['account-authentication-tokens'];
            }
        });
    }

    fnAddApiKey(e, apiKeyObject, form) {
        e.preventDefault();
        e.stopPropagation();
        this._api.fnCreateApiKey(apiKeyObject)
            .then(response => {
                this._toastr.fnSuccess('Api key created successfully.');
                this.fnGetApiKeys();
                form.resetForm();
            });
    }

}
