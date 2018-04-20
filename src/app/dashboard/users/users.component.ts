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
    page = 1;
    showResetPasswordModal: boolean;
    selectedUsers?: any;
    usersOnPage?: any;
    allSelected?: boolean;

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
        this.selectedUsers = [];
        this.usersOnPage = [];
        this.allSelected = false;
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
            this._user.fnSuspendUser(user);
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

    fnShowResetPasswordModal(user) {
        this.userObject = user;
        this.showResetPasswordModal = true;
    }

    fnHideResetPasswordModal () {
        this.showResetPasswordModal = false;
    }

    updateCheckedOptions(userId, e) {
        if (e.target.checked) {
            const userIndex = _.findIndex(this.selectedUsers, user => user === userId);
            if (userIndex === -1) {
                this.selectedUsers.push(userId);
            }
        } else {
            const userIndex = _.findIndex(this.selectedUsers, user => user === userId);
            if (userIndex > -1) {
                this.selectedUsers.splice(userIndex, 1);
            }
        }
        this.allSelected = this.isAllSelected();
    }

    selectAll(e) {
        e.preventDefault();
        if (!this.allSelected) {
            _.map(this.users, user => {
                const userIndex = _.findIndex(this.selectedUsers, userId => userId === user['user-id']);
                if (userIndex === -1) {
                    this.selectedUsers.push(user['user-id']);
                }
                return user;
            });
        } else {
            _.map(this.users, user => {
                const userIndex = _.findIndex(this.selectedUsers, userId => userId === user['user-id']);
                if (userIndex > -1) {
                    this.selectedUsers.splice(userIndex, 1);
                }
                return user;
            });
        }
        this.allSelected = this.isAllSelected();
    }

    fnOnPageChange(page) {
        this.page = page;
        this.allSelected = this.isAllSelected();
    }

    isAllSelected() {
        let selected = true;
        _.forEach(this.users, user => {
            if (_.isEmpty(this.selectedUsers) || this.selectedUsers.indexOf(user['user-id']) === -1) {
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
            _.forEach(this.selectedUsers, userId => {
                const foundUser = _.find(this.users, user => userId === user['user-id']);
                this.suspendEnableUser(foundUser, true);
            });
        } else if (action === 'enable') {
            _.forEach(this.selectedUsers, userId => {
                const foundUser = _.find(this.users, user => userId === user['user-id']);
                this.suspendEnableUser(foundUser, false);
            });
        } else if (action === 'delete') {

        }
    }

    suspendEnableUser(user, suspend) {
        if (user) {
            this._user.fnSuspendEnableUser(user, suspend);
            const suspendedIndex = _.findIndex(this.users, item => item['user-id'] === user['user-id']);
            this.users[suspendedIndex]['suspended'] = suspend;
        }
    }

}
