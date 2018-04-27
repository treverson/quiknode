import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {InstanceService} from '../common/services/instance-service/instance.service';
import {UserService} from '../common/services/user-service/user.service';
import {AuthService} from '../common/services/auth-service/auth.service';
import * as $ from 'jquery';

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
    users: any[];

    constructor(private titleService: Title, private _instance: InstanceService, public _users: UserService,
                private _auth: AuthService) {
        this.showInstanceCreateModal = false;
        this.showUserCreateModal = false;
        this.showAccountModal = false;
        this.showApiKeyModal = false;
    }

    ngOnInit() {
        $('body').removeClass('login');
        this.titleService.setTitle('New Dashboard');
        this._instance.instances.subscribe((instances) => {
            this.instances = instances;
        });
        this._users.fnGetUsers().then((response: any) => {
            this.users = this._users.userList;
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

    fnNotImplemented(e) {
        this._instance.fnNotImplemented(e);
    }

    fnHasUserPermission() {
        return this._auth.fnHasUserListPermission();
    }
}
