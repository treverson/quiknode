import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../common/services/instance-service/instance.service';
import * as _ from 'lodash';
import {UserService} from '../common/services/user-service/user.service';
import {hashSync} from 'bcryptjs';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    numberOfCalls?: any;
    successCalls?: any;
    instanceList?: any;
    name?: string;
    instanceName?: string;

    constructor(private _instance: InstanceService, private _user: UserService) {
        this.numberOfCalls = {
            numberOfUsersCall: 0,
            numberOfInstanceCalls: 0,
        };
        this.successCalls = {
            successCalls: 0,
            successCallsUser: 0,
            successCallsInstance: 0
        };
        this.name = '';
        this.instanceName = '';
    }

    ngOnInit() {
        this._instance.fnGetInstances().then((response: any) => {
            this.instanceList = response.instances;
        });
    }

    fnCallGetMetrics(e) {
        this.successCalls.successCalls = 0;
        _.map(this.instanceList, (instance, i) => {
            const getMetricObj = {
                'instance-id': instance['instance-id'],
                'metrics-type': 'http-requests'
            };
            this._instance.fnGetMetric(getMetricObj).then((response: any) => {
                this.successCalls.successCalls = this.successCalls.successCalls + 1;
                if (i === this.instanceList.length) {
                    this.successCalls.successCalls = 0;
                }
            });
        });
    }


    fnCreateUsers(e) {
        this.successCalls.successCallsUser = 0;
        if (this.numberOfCalls.numberOfUsersCall > 0) {
            for (let i = 1; i <= this.numberOfCalls.numberOfUsersCall; i++) {
                const userObject: any = {
                    name: this.name + i,
                    email:  this.name + i + '@gmail.com',
                    'otp-enabled': false,
                    password: hashSync('password', 8),
                };
                this._user.fnCreateUser(userObject).then(response => {
                    this.successCalls.successCallsUser = this.successCalls.successCallsUser + 1;
                    if (i === this.numberOfCalls) {
                        this.successCalls.successCallsUser = 0;
                    }
                });
            }
        }
    }

    fnCreateInstances(e) {
        this.successCalls.successCallsInstance = 0;
        if (this.numberOfCalls.numberOfInstanceCalls > 0) {
            for (let i = 1; i <= this.numberOfCalls.numberOfInstanceCalls; i++) {
                const instanceObject: any = {
                    name: this.instanceName + i,
                };
                this._instance.fnCreateInstance(instanceObject).then(response => {
                    this.successCalls.successCallsInstance = this.successCalls.successCallsInstance + 1;
                    if (i === this.numberOfCalls.numberOfInstanceCalls) {
                        this.successCalls.successCallsInstance = 0;
                    }
                    this._instance.fnGetInstances().then((res: any) => {
                        this.instanceList = res.instances;
                    });
                });
            }
        }
    }

}
