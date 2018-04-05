import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

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

    constructor(private titleService: Title) {
        this.showInstanceCreateModal = false;
        this.showUserCreateModal = false;
        this.showAccountModal = false;
    }

    ngOnInit() {
        this.titleService.setTitle('New Dashboard');
    }

    fnHideCreateModal() {
        this.showInstanceCreateModal = false;
        this.showUserCreateModal = false;
        this.showAccountModal = false;
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
        }
    }
}
