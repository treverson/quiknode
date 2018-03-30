import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {UserService} from '../../common/services/user-service/user.service';
import * as _ from  'lodash';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    showUserCreateModal: boolean;
    users?: any[];
    userObject?: any;
    showDeleteModal?: boolean;
    deleteUser?: any;

    constructor(private _user: UserService) {
        this.showUserCreateModal = false;
        this.showDeleteModal = false;
    }

    ngOnInit() {
        this.fnGetUsers();
    }

    fnGetUsers() {
        this._user.fnGetUsers().then((response: any) => {
            if (response && !_.isEmpty(response.users)) {
                this.users = _.map(response.users, user => {
                    user.created =  moment(user.created).format('MM-DD-YYYY');
                    return user;
                });
            }
        });
    }

    fnShowCreateModal(obj) {
        this.userObject = obj;
        this.showUserCreateModal = true;
    }

    fnHideCreateModal(created) {
        if (created) {
            this.fnGetUsers();
        }
        this.showUserCreateModal = false;
    }

    fnShowDeleteModal(user) {
        this.deleteUser = user;
        this.showDeleteModal = true;
    }

    fnHideDeleteModal() {
        this.deleteUser = null;
        this.showDeleteModal = false;
    }
}
