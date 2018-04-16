import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {UserService} from '../../common/services/user-service/user.service';
import * as _ from 'lodash';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    showUserCreateModal: boolean;
    users?: any[];
    originalUsers: any[];
    userObject?: any;
    showDeleteModal?: boolean;
    deleteUser?: any;
    sortBy: string;
    sortType: string;
    searchText: string;
    viewType: string;
    isLoading: boolean;
    suspendUser: any;
    showSuspendModal: boolean;

    constructor(private _user: UserService, private titleService: Title) {
        this.showUserCreateModal = false;
        this.showDeleteModal = false;
        this.sortBy = 'none';
        this.sortType = 'asc';
        this.searchText = '';
        this.viewType = 'grid';
        this.users = [];
        this.showSuspendModal = false;
        this.suspendUser = {};
    }

    ngOnInit() {
        this.fnGetUsers();
        this.titleService.setTitle('Users');
    }

    fnGetUsers() {
        this.isLoading = true;
        this._user.fnGetUsers()
            .then((response: any) => {
                if (response && !_.isEmpty(response.users)) {
                    this.users = _.map(response.users, user => {
                        user.created = moment(user.created).format('MM-DD-YYYY');
                        return user;
                    });
                    this.originalUsers = _.clone(this.users);
                    this.fnOnSearchTextChange();
                }
                this.isLoading = false;
            })
            .catch((err) => {
                this.isLoading = false;
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

    fnHideDeleteModal(user) {
        if (user) {
            const deleteIndex = _.findIndex(this.users, item => item['user-id'] === user['user-id']);
            this.users.splice(deleteIndex, 1);
        }
        this.fnHideCreateModal(null);
        this.deleteUser = null;
        this.showDeleteModal = false;
    }

    fnOnSortChange() {
        switch (this.sortBy) {
            case 'name':
                this.users = _.orderBy(this.users, [user => user.name.toLowerCase()], [this.sortType]);
                break;
            case 'date':
                this.users = _.orderBy(this.users, ['created'], [this.sortType]);
                break;
            case 'none':
            default:
                this.users = this.originalUsers;
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
        this.users = _.filter(this.originalUsers,
            user => user.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 ||
            user.email.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
        if (this.sortBy !== 'none') {
            this.fnOnSortChange();
        }

    }

    changeView(e, viewType) {
        e.stopPropagation();
        e.preventDefault();
        this.viewType = viewType;
    }

    fnShowSuspendModal(user) {
        this.suspendUser = user;
        this.showSuspendModal = true;
    }

    fnHideSuspendModal(user) {
        if (user) {
            const suspendedIndex = _.findIndex(this.users, item => item['user-id'] === user['user-id']);
            if (this.users[suspendedIndex]['suspended']) {
                this.users[suspendedIndex]['suspended'] = false;
            } else {
                this.users[suspendedIndex]['suspended'] = true;
            }
        }
        this.showSuspendModal = false;
        this.showUserCreateModal = false;
    }

}
