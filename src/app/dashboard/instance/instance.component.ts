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
    originalInstances: any[];
    showInstanceCreateModal: boolean;
    showSuspendModal: boolean;
    instanceObject;
    sortBy: string;
    sortType: string;
    searchText: string;

    constructor(private _instance: InstanceService) {
        this.showInstanceCreateModal = false;
        this.showSuspendModal = false;
        this.sortBy = 'none';
        this.sortType = 'asc';
        this.searchText = '';
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
                this.originalInstances = _.clone(this.instances);
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

    fnOnSortChange() {
        switch (this.sortBy) {
            case 'name':
                this.instances = _.orderBy(this.instances, [instance => instance.name.toLowerCase()], [this.sortType]);
                break;
            case 'date':
                this.instances = _.orderBy(this.instances, ['created'], [this.sortType]);
                break;
            case 'none':
            default:
                this.instances =  this.originalInstances;
                break;
        }
    }

    fnOnSortTypeChange(event, sortType) {
        event.stopPropagation();
        event.preventDefault();
        this.sortType = sortType;
        this.fnOnSortChange();
    }

    fnOnSearchTextChange() {
        this.instances = _.filter(this.originalInstances,
                instance => instance.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
        if (this.sortBy !== 'none') {
            this.fnOnSortChange();
        }

    }

}
