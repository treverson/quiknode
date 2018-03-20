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
    showModal: boolean;
    suspendModal: boolean;
    visiblityState: String = 'hidden';
    visibleIndex: number;

    constructor(private _instance: InstanceService) {
        this.showModal = false;
        this.suspendModal = false;
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

    showCreateModal() {
        this.showModal = true;
    }

    hideCreateModal(created?: boolean) {
        if (created) {
            this.fnGetInstances();
        }
        this.showModal = false;
    }

    showSuspendModal() {
        this.suspendModal = true;
    }

    hideSuspendModal() {
        this.suspendModal = false;
    }

    fadeInFadeOut(index: number) {
        this.visibleIndex = index;
        if (this.visiblityState === 'hidden') {
            this.visiblityState = 'shown';
        } else {
            this.visiblityState = 'hidden';
        }
    }

}
