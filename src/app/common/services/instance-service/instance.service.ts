import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../../constant';

@Injectable()
export class InstanceService {
    public instances: EventEmitter<any> = new EventEmitter();
    public selectedInstanceAnalytics: EventEmitter<any> = new EventEmitter();

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

    fnUpdateInstance(obj: any) {
        return new Promise((resolve, reject) => {
            this._http
                .put(Constant.API_URL + `account/instance/${obj['instance-id']}`, obj)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }

    fnSuspendInstance() {
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

    fnGetMetric(obj: any) {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + `account/instance/${obj['instance-id']}/metrics/${obj['metrics-type']}`)
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }
}
