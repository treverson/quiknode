import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {InstanceService} from '../common/services/instance-service/instance.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    instances: any[];
    showInstanceCreateModal?: boolean;
    showUserCreateModal?: boolean;
    showAccountModal?: boolean;
    showApiKeyModal?: boolean;

    constructor(private titleService: Title, private _instance: InstanceService) {
        this.showInstanceCreateModal = false;
        this.showUserCreateModal = false;
        this.showAccountModal = false;
        this.showApiKeyModal = false;
    }

    ngOnInit() {
        this.titleService.setTitle('New Dashboard');
        this._instance.instances.subscribe((instances) => {
            this.instances = instances;
        });
    }

    fnHideCreateModal() {
        this.showInstanceCreateModal = false;
        this.showUserCreateModal = false;
        this.showAccountModal = false;
        this.showApiKeyModal = false;
    }

    fnShowCreateModal(e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'instance') {
            this.showInstanceCreateModal = true;
        } else if (type === 'user') {
            this.showUserCreateModal = true;
        } else if (type === 'account') {
            this.showAccountModal = true;
        } else if (type === 'apiKey') {
            this.showApiKeyModal = true;
        }
    }
}
