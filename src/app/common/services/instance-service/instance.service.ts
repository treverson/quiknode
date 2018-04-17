import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constant} from '../../constant';
import * as _ from 'lodash';

@Injectable()
export class InstanceService {
    public instances: EventEmitter<any> = new EventEmitter();
    public selectedInstanceAnalytics: EventEmitter<any> = new EventEmitter();
    private suspendedInstances: any;

    constructor(private _http: HttpClient) {
        this.suspendedInstances = String(localStorage.getItem('SUSPENDED_INSTANCES')).split(',') || [];
    }

    fnGetInstances() {
        return new Promise((resolve, reject) => {
            this._http
                .get(Constant.API_URL + 'account/instances')
                .subscribe((response: any) => {
                    if (response.instances) {
                        _.map(response.instances, ins => {
                            if (_.findIndex(this.suspendedInstances, instance => instance === ins['instance-id']) > -1) {
                                ins.suspended = true;
                            }
                            return ins;
                        });
                    }
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

    fnSuspendInstance(instance) {
        const suspendedIndex = _.findIndex(this.suspendedInstances, ins => ins === instance['instance-id']);
        if (instance.suspended) {
            this.suspendedInstances.splice(suspendedIndex, 1);
        } else {
            this.suspendedInstances.push(instance['instance-id']);
        }
        localStorage.setItem('SUSPENDED_INSTANCES', this.suspendedInstances);
        /*return new Promise((resolve, reject) => {
            this._http
                .delete(Constant.API_URL + '')
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });*/
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

    fnNotImplemented(e) {
        e.stopPropagation();
        e.preventDefault();
        alert('Not yet implemented!');
    }

    fnCreateTraffic(instance) {
        const obj = {
            'method': 'eth_blockNumber',
            'params': [],
            'id': 1,
            'jsonrpc': '2.0'
        };
        return new Promise((resolve, reject) => {
            const headers = new HttpHeaders().set('InterceptorSkipHeader', '');
            this._http
                .post(`https://${instance}.quiknode.pro/`, obj, {headers})
                .subscribe((response: any) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
        });
    }
}
