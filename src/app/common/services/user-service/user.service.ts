import {Injectable} from '@angular/core';
import {Constant} from '../../constant';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient) {
    }

    fnGetUsers() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/users')
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnCreateUser(obj: any) {
        return new Promise((resolve, reject) => {
            this._http
                .post(Constant.API_URL + 'account/user', obj)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnUpdateUser(obj: any, userId: string) {
        return new Promise((resolve, reject) => {
            this._http
                .put(Constant.API_URL + `account/user/${userId}`, obj)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnGetPermissions() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/permissions')
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnGetUserPermissions(userId) {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + `account/user/${userId}/permissions`)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnUpdateUserPermissions(obj, userId) {
        return new Promise((resolve, reject) => {
            this._http
                .put(Constant.API_URL + `account/user/${userId}/permissions`, obj)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnDeleteUser(userId) {
        return new Promise((resolve, reject) => {
            this._http
                .delete(Constant.API_URL + `account/user/${userId}`)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnGetUser() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/user')
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

}
