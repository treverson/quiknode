import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constant} from '../../constant';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AuthService {

    private _token: any;

    constructor(private _http: HttpClient) {
        if (localStorage.getItem('AUTH_TOKEN')) {
            this._token = localStorage.getItem('AUTH_TOKEN');
        }
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
            const requestObj = {
                email: obj.username,
                password: obj.password,
            };
            this._http
                .post(environment.api + 'api/v1/session', requestObj)
                .subscribe((response: any) => {
                    if (response && response.secret) {
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
