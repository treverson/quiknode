import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../common/services/instance-service/instance.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
    selector: 'app-instance',
    templateUrl: './instance.component.html',
    styleUrls: ['./instance.component.css'],
})
export class InstanceComponent implements OnInit {
    instances: any[];
    showInstanceCreateModal: boolean;
    showSuspendModal: boolean;
    instanceObject;

    constructor(private _instance: InstanceService) {
        this.showInstanceCreateModal = false;
        this.showSuspendModal = false;
    }

    ngOnInit() {
        this.fnGetInstances();
    }

    fnGetInstances() {
        this._instance.fnGetInstances().then((response: any) => {
            if (response && !_.isEmpty(response.instances)) {
                this.instances = _.map(response.instances, instance => {
                    instance.created =  moment(instance.created).format('MM-DD-YYYY');
                    return instance;
                });
                this._instance.instances.next(this.instances);
            }
        });
    }

    fnShowCreateModal(obj) {
        this.instanceObject = obj;
        this.showInstanceCreateModal = true;
    }

    fnHideCreateModal(created?: boolean) {
        if (created) {
            this.fnGetInstances();
        }
        this.showInstanceCreateModal = false;
    }

    fnShowSuspendModal() {
        this.showSuspendModal = true;
    }

    fnHideSuspendModal() {
        this.showSuspendModal = false;
    }

}
