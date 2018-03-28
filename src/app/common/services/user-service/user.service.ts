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

}
