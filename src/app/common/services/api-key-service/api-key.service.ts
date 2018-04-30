import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../../constant';
import * as _ from 'lodash';

@Injectable()
export class ApiKeyService {
    apiKeyList: any[];
    public changedApiKeys: EventEmitter<any> = new EventEmitter();

    constructor(private _http: HttpClient) {
        this.apiKeyList = [];
    }

    fnCreateApiKey(obj) {
        return new Promise((resolve, reject) => {
            this._http
                .post(Constant.API_URL + 'account/authentication-token', obj)
                .subscribe((response: any) => {
                    resolve(response);
                    this.fnGetApiKeys();
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnGetApiKeys() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/authentication-tokens')
                .subscribe((response: any) => {
                    if (response && response['account-authentication-tokens']) {
                        this.apiKeyList = response['account-authentication-tokens'];
                        this.apiKeyList = _.orderBy(this.apiKeyList, ['created'], ['desc']);
                        response['account-authentication-tokens'] = this.apiKeyList;
                    }
                    this.changedApiKeys.next(this.apiKeyList);
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    getApiKeys() {
        return this.apiKeyList;
    }

    fnUpdateApiKey(obj, keyId) {
        return new Promise((resolve, reject) => {
            this._http
                .put(Constant.API_URL + `account/authentication-token/${keyId}`, obj)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

}
