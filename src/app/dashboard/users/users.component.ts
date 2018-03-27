import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    showUserCreateModal: boolean;

    constructor() {
        this.showUserCreateModal = false;
    }

    ngOnInit() {
    }

    fnShowCreateModal(obj) {
        this.showUserCreateModal = true;
    }

    fnHideCreateModal(created?: boolean) {
        this.showUserCreateModal = false;
    }

}
