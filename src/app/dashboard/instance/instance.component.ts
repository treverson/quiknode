import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../common/services/instance-service/instance.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-instance',
    templateUrl: './instance.component.html',
    styleUrls: ['./instance.component.css'],
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({display: 'block'})),
            state('hidden', style({display: 'none'})),
            transition('shown => hidden', animate('0.3s 600ms ease-out')),
            transition('hidden => shown', animate('0.1s 100ms ease-in')),
        ])
    ]
})
export class InstanceComponent implements OnInit {
    instances: any[];
    showInstanceCreateModal: boolean;
    showSuspendModal: boolean;
    visibilityState: String = 'hidden';
    visibleIndex: number;
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
            }
        });
    }

    fnShowCreateModal(e, obj) {
        e.preventDefault();
        this.instanceObject = obj;
        this.showInstanceCreateModal = true;
    }

    fnHideCreateModal(created?: boolean) {
        if (created) {
            this.fnGetInstances();
        }
        this.showInstanceCreateModal = false;
    }

    fnShowSuspendModal(e) {
        e.preventDefault();
        this.showSuspendModal = true;
    }

    fnHideSuspendModal() {
        this.showSuspendModal = false;
    }

    fadeInFadeOut(index: number) {
        this.visibleIndex = index;
        if (this.visibilityState === 'hidden') {
            this.visibilityState = 'shown';
        } else {
            this.visibilityState = 'hidden';
        }
    }

}
