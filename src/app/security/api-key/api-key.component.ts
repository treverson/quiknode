import {Component, OnInit} from '@angular/core';
import {ApiKeyService} from '../../common/services/api-key-service/api-key.service';
import {UserService} from '../../common/services/user-service/user.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-api-key',
    templateUrl: './api-key.component.html',
    styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {
    apiKeys: string[];
    users: any[];

    constructor(private _api: ApiKeyService, private _user: UserService) {
        this.users = [];
    }

    ngOnInit() {
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

}
