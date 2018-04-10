import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AuthService {

    private _token: any;
    private _userId: string;

    constructor(private _http: HttpClient) {
        if (localStorage.getItem('AUTH_TOKEN')) {
            this._token = localStorage.getItem('AUTH_TOKEN');
            this._userId = localStorage.getItem('USER_ID');
        }
    }

    /**
     * Get user token
     * */
    fnGetToken(): any {
        return this._token;
    }

    /**
     * Get current logged in user
     * */
    fnGetUserId(): any {
        return localStorage.getItem('USER_ID');
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
                        const currentUserId = response['user-id'];
                        localStorage.setItem('AUTH_TOKEN', basicAuth);
                        localStorage.setItem('USER_ID', currentUserId);
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
            localStorage.removeItem('USER_ID');
            resolve();
        });
    }

    /**
     * Get user is logged in or not
     * */
    fnIsLoggedIn(): any {
        return this._token;
    }

}
