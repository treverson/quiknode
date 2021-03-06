import {Component, OnInit} from '@angular/core';
import {ApiKeyService} from '../../common/services/api-key-service/api-key.service';
import {UserService} from '../../common/services/user-service/user.service';
import * as _ from 'lodash';
import {ToastrService} from '../../common/services/toastr.service';
import {AuthService} from '../../common/services/auth-service/auth.service';
import {InstanceService} from '../../common/services/instance-service/instance.service';

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
    isLoading: boolean;
    isLoadingKeys?: boolean;
    isDarkMode: boolean;
    page = 1;

    constructor(private _api: ApiKeyService, private _user: UserService, private _toastr: ToastrService,
                private _auth: AuthService, private _instance: InstanceService) {
        this.users = [];
        this.apiKeys = [];
        this.apiKeyObject = {
            secret: '',
            description: ''
        };
        this.currentUser = this._auth.fnGetUserId();
        this.selectedUser = _.clone(this.currentUser);
        this.isLoading = false;
        this.isLoadingKeys = false;
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
    }

    ngOnInit() {
        this.currentUser = this._auth.fnGetUserId();
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this.selectedUser = _.clone(this.currentUser);
        this.users = this._user.fnGetUserList();
        this.apiKeys = this._api.getApiKeys();

        if (_.isEmpty(this.apiKeys)) {
            this.fnGetApiKeys();
        }
        if (_.isEmpty(this.users)) {
            this.isLoadingKeys = true;
            this._user.fnGetUsers().then((response: any) => {
                this.isLoadingKeys = false;
                if (response && !_.isEmpty(response.users)) {
                    this.users = response.users;
                }
            }).catch(() => {
                this.isLoadingKeys = false;
            });
        }
        this._api.changedApiKeys.subscribe((newApiKeys) => {
            this.apiKeys = newApiKeys;
        });
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
        this.isLoading = true;
        this._api.fnCreateApiKey(apiKeyObject)
            .then(response => {
                this.isLoading = false;
                this._toastr.fnSuccess('Api key created successfully.');
                form.resetForm();
            }).catch(err => {
                this.isLoading = false;
        });
    }

    fnOnChange(obj, i) {
        if (obj.hasOwnProperty('secret') && !obj.secret) {
            delete obj.secret;
        }
        if (obj.description) {
            this._api.fnUpdateApiKey(obj, obj['account-authentication-token-id'])
                .then(response => {
                    this._toastr.fnSuccess('Api key updated successfully.');
                    this.apiKeys[i] = obj;
                });
        }
    }

    fnNotImplemented(e) {
        this._instance.fnNotImplemented(e);
    }

}
