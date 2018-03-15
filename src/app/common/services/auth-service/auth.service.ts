import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constant} from '../../constant';

@Injectable()
export class AuthService {

    private _token: any;

    constructor(private _http: HttpClient) {
        if (localStorage.getItem('AUTH_TOKEN')) {
            this._token = this._fnParseJWT(localStorage.getItem('AUTH_TOKEN'));
        }
    }

    /**
     * Parse token
     * */
    private _fnParseJWT(str: any) {
        return JSON.parse(str);
    }

    /**
     * Get user token
     * */
    fnGetToken(): any {
        return this._token;
    }

    /**
     * User sign in.
     * @param {object} obj
     * */
    fnSignIn(obj: any) {
        return new Promise((resolve, reject) => {
            const basicAuth = btoa(`${obj.username}:${obj.password}`);
            this._http
                .get(Constant.API_URL + 'account/account', {
                    headers: new HttpHeaders().set('Authorization', `basic ${basicAuth}`),
                })
                .subscribe((response: any) => {
                    if (response && response.accountId) {
                        localStorage.setItem('AUTH_TOKEN', basicAuth);
                        this._token = basicAuth;
                    }
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    /**
     * User sign out.
     * */
    fnSignOut() {
        return new Promise((resolve, reject) => {
            this._token = '';
            localStorage.removeItem('AUTH_TOKEN');
            resolve();
        });
    }


}
