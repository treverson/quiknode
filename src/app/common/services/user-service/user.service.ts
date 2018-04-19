import {Injectable} from '@angular/core';
import {Constant} from '../../constant';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class UserService {
    userList: any[];
    private suspendedUsers: any;

    constructor(private _http: HttpClient) {
        this.userList = [];
        this.suspendedUsers = String(localStorage.getItem('SUSPENDED_USERS')).split(',') || [];
    }

    fnGetUsers() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/users')
                .subscribe((response: any) => {
                    _.map(response.users, user => {
                        if (_.findIndex(this.suspendedUsers, userId => userId === user['user-id']) > -1) {
                            user.suspended = true;
                        }
                        return user;
                    });
                    this.userList = response.users;
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

    fnGetUserList() {
        return this.userList;
    }

    fnSuspendUser(user) {
        const suspendedIndex = _.findIndex(this.suspendedUsers, item => item === user['user-id']);
        if (user.suspended) {
            this.suspendedUsers.splice(suspendedIndex, 1);
        } else if (suspendedIndex === -1) {
            this.suspendedUsers.push(user['user-id']);
        }
        localStorage.setItem('SUSPENDED_USERS', this.suspendedUsers);
    }

    fnSuspendEnableUser(user, suspend) {
        const suspendedIndex = _.findIndex(this.suspendedUsers, item => item === user['user-id']);
        if (!suspend) {
            this.suspendedUsers.splice(suspendedIndex, 1);
        } else if (suspendedIndex === -1) {
            this.suspendedUsers.push(user['user-id']);
        }
        localStorage.setItem('SUSPENDED_USERS', this.suspendedUsers);
    }

}
