import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../../constant';

@Injectable()
export class InstanceService {

    constructor(private _http: HttpClient) {
    }

    fnGetInstances() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/instances')
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnCreateInstance(obj: any) {
        return new Promise((resolve, reject) => {
            this._http
                .post(Constant.API_URL + 'account/instance', obj)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    suspendInstance() {
        return new Promise((resolve, reject) => {
            this._http
                .delete(Constant.API_URL + '')
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

}
