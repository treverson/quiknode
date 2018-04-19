import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../common/services/instance-service/instance.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import {Title} from '@angular/platform-browser';

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
    viewType: string;
    showAnalyticsModal: boolean;
    isLoading: boolean;
    suspendInstance: any;
    page = 1;
    selectedInstances?: any;
    instancesOnPage?: any;
    allSelected?: boolean;

    constructor(private _instance: InstanceService, private titleService: Title) {
        this.showInstanceCreateModal = false;
        this.showSuspendModal = false;
        this.sortBy = 'none';
        this.sortType = 'asc';
        this.searchText = '';
        this.viewType = 'grid';
        this.showAnalyticsModal = false;
        this.instances = [];
        this.suspendInstance = {};
        this.selectedInstances = [];
        this.instancesOnPage = [];
        this.allSelected = false;
    }

    ngOnInit() {
        this.fnGetInstances();
        this.titleService.setTitle('Instances');
    }

    fnGetInstances() {
        this.isLoading = true;
        this._instance.fnGetInstances()
            .then((response: any) => {
                if (response && !_.isEmpty(response.instances)) {
                    this.instances = _.map(response.instances, instance => {
                        instance.created = moment(instance.created).format('MM-DD-YYYY');
                        return instance;
                    });
                    this.originalInstances = _.clone(this.instances);
                    this._instance.instances.next(this.instances);
                    this.fnOnSearchTextChange();
                }
                this.isLoading = false;
            })
            .catch((err) => {
                this.isLoading = false;
            });
    }

    fnShowCreateModal(obj) {
        this.instanceObject = obj;
        this.showInstanceCreateModal = true;
    }

    fnHideCreateModal(obj) {
        if (obj && obj.created) {
            this.fnGetInstances();
        }
        if (obj && obj.instanceObject) {
            const findIndex = _.findIndex(this.instances, ins => ins['instance-id'] === obj.instanceObject['instance-id']);
            const findOriginalIndex = _.findIndex(this.originalInstances, ins => ins['instance-id'] === obj.instanceObject['instance-id']);
            this.instances[findIndex] = obj.instanceObject;
            this.originalInstances[findOriginalIndex] = obj.instanceObject;
        }
        this.showInstanceCreateModal = false;
    }

    fnShowSuspendModal(instance) {
        this.suspendInstance = instance;
        this.showSuspendModal = true;
    }

    fnHideSuspendModal(instance) {
        if (instance) {
            this._instance.fnSuspendInstance(instance);
            const suspendedIndex = _.findIndex(this.instances, ins => ins['instance-id'] === instance['instance-id']);
            if (this.instances[suspendedIndex]['suspended']) {
                this.instances[suspendedIndex]['suspended'] = false;
            } else {
                this.instances[suspendedIndex]['suspended'] = true;
            }
        }
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
                this.instances = this.originalInstances;
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

    changeView(e, viewType) {
        e.stopPropagation();
        e.preventDefault();
        this.viewType = viewType;
    }

    fnShowAnalyticsModal() {
        this.showAnalyticsModal = true;
    }

    fnHideAnalyticsModal() {
        this.showAnalyticsModal = false;
    }

    updateCheckedOptions(instanceId, e) {
        if (e.target.checked) {
            const instanceIndex = _.findIndex(this.selectedInstances, ins => ins === instanceId);
            if (instanceIndex === -1) {
                this.selectedInstances.push(instanceId);
            }
        } else {
            const instanceIndex = _.findIndex(this.selectedInstances, ins => ins === instanceId);
            if (instanceIndex > -1) {
                this.selectedInstances.splice(instanceIndex, 1);
            }
        }
        this.allSelected = this.isAllSelected();
    }

    selectAll(e) {
        e.preventDefault();
        const endIndex = (this.page * 12);
        const startIndex = endIndex - 12;
        this.instancesOnPage = this.instances.slice(startIndex, endIndex);
        if (!this.allSelected) {
            _.map(this.instancesOnPage, user => {
                const instanceIndex = _.findIndex(this.selectedInstances, instanceId => instanceId === user['instance-id']);
                if (instanceIndex === -1) {
                    this.selectedInstances.push(user['instance-id']);
                }
                return user;
            });
        } else {
            _.map(this.instancesOnPage, user => {
                const instanceIndex = _.findIndex(this.selectedInstances, userId => userId === user['instance-id']);
                if (instanceIndex > -1) {
                    this.selectedInstances.splice(instanceIndex, 1);
                }
                return user;
            });
        }
        this.allSelected = this.isAllSelected();
    }

    fnOnPageChange(page) {
        this.page = page;
        const endIndex = (page * 12);
        const startIndex = endIndex - 12;
        this.instancesOnPage = this.instances.slice(startIndex, endIndex);
        this.allSelected = this.isAllSelected();
    }

    isAllSelected() {
        let selected = true;
        _.forEach(this.instancesOnPage, instance => {
            if (_.isEmpty(this.selectedInstances) || this.selectedInstances.indexOf(instance['instance-id']) === -1) {
                selected = false;
                return false;
            }
        });
        return selected;
    }

    onChangeAction(e) {
        const action = e.target.value;
        if (action === 'clone') {

        } else if (action === 'suspend') {
            _.forEach(this.selectedInstances, instanceId => {
                const foundInstance = _.find(this.instances, instance => instanceId === instance['instance-id']);
                this.suspendEnableUser(foundInstance, true);
            });
        } else if (action === 'enable') {
            _.forEach(this.selectedInstances, instanceId => {
                const foundInstance = _.find(this.instances, instance => instanceId === instance['instance-id']);
                this.suspendEnableUser(foundInstance, false);
            });
        } else if (action === 'delete') {

        }
    }

    suspendEnableUser(instance, suspend) {
        if (instance) {
            this._instance.fnSuspendEnableInstance(instance, suspend);
            const suspendedIndex = _.findIndex(this.instances, item => item['instance-id'] === instance['instance-id']);
            this.instances[suspendedIndex]['suspended'] = suspend;
        }
    }

}
