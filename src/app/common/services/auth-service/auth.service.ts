import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AuthService {

    private _token: any;
    private _userId: string;
    private keepLoggedIn: boolean;
    private hasUserListPermission: boolean;
    private isDarkUIMode: boolean;
    public uiModeChange: EventEmitter<any> = new EventEmitter();

    constructor(private _http: HttpClient) {
        this.keepLoggedIn = localStorage.getItem('KEEP_LOGGED_IN') === 'true' || false;
        if (localStorage.getItem('AUTH_TOKEN')) {
            this._token = localStorage.getItem('AUTH_TOKEN');
            this._userId = localStorage.getItem('USER_ID');
        }
        this.hasUserListPermission = false;
        this.isDarkUIMode = localStorage.getItem('UI_MODE') === 'true' || false;
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
    fnSignIn(obj: any, success: number) {
        return new Promise((resolve, reject) => {
            const basicAuth = btoa(`${obj.username}:${obj.password}`);
            const requestObj = {
                email: obj.username,
                password: obj.password,
            };
            this._http
                .post(environment.api + 'api/v1/session', requestObj)
                .subscribe((response: any) => {
                    if (response && response.secret && success === 1) {
                        const currentUserId = response['user-id'];
                        localStorage.setItem('AUTH_TOKEN', basicAuth);
                        localStorage.setItem('USER_ID', currentUserId);
                        localStorage.setItem('KEEP_LOGGED_IN', obj.keepLoggedIn);
                        this._token = basicAuth;
                        this.keepLoggedIn = obj.keepLoggedIn;
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
            localStorage.removeItem('KEEP_LOGGED_IN');
            resolve();
            this.hasUserListPermission = false;
        });
    }

    /**
     * Get user is logged in or not
     * */
    fnIsLoggedIn(): any {
        return this._token;
    }

    fnKeepLoggedIn(): boolean {
        return this.keepLoggedIn;
    }

    fnSetUserListPermission(hasPermission) {
        this.hasUserListPermission = hasPermission;
    }

    fnHasUserListPermission() {
        return this.hasUserListPermission;
    }

    fnToggleUIMode() {
        this.isDarkUIMode = !this.isDarkUIMode;
        this.uiModeChange.next(this.isDarkUIMode);
        localStorage.setItem('UI_MODE', String(this.isDarkUIMode));
    }

    fnGetIsDarkUiMode() {
        return this.isDarkUIMode;
    }
}
