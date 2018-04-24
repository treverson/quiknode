import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../../common/services/user-service/user.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-single-user',
    templateUrl: './single-user.component.html',
    styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent implements OnInit {
    @Input() user: any;
    @Input() viewType: any;
    permissions: any;
    @Output() fnShowUserModal =  new EventEmitter<any>();
    isAdmin: boolean;

    constructor(private _user: UserService) {
        this.isAdmin = false;
        this.permissions = this._user.permissionList;
    }

    ngOnInit() {
        this.permissions = this._user.permissionList;
        if (this.user) {
            this._user.fnGetUserPermissions(this.user['user-id'])
                .then(res => {
                    if (this.permissions && !_.isEmpty(res['user-permissions'])) {
                        const findPer = _.find(this.permissions, per => per['name'] === 'user:list');
                        if (findPer &&
                            _.findIndex(res['user-permissions'], per =>
                                per['permission-id'] === findPer['permission-id']) > -1) {
                            this.isAdmin = true;
                        }
                    }
                });
        }
    }

    showUserModal(e) {
        e.preventDefault();
        this.fnShowUserModal.next(this.user);
    }
}
