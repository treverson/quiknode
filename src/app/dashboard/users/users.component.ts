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

    constructor(private _user: UserService) {
        this.showUserCreateModal = false;
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

    fnShowCreateModal() {
        this.showUserCreateModal = true;
    }

    fnHideCreateModal() {
        this.showUserCreateModal = false;
    }

}
