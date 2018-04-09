import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../../constant';

@Injectable()
export class ApiKeyService {
    apiKeyList: any[];

    constructor(private _http: HttpClient) {
        this.apiKeyList = [];
    }

    fnCreateApiKey(obj) {
        return new Promise((resolve, reject) => {
            this._http
                .post(Constant.API_URL + 'account/authentication-token', obj)
                .subscribe((response: any) => {
                    resolve(response);
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
                    }
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    getApiKeys() {
        return this.apiKeyList;
    }

}
