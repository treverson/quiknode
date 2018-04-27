import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../../common/services/user-service/user.service';
import {hashSync} from 'bcryptjs';
import {ToastrService} from '../../../common/services/toastr.service';
import * as _ from 'lodash';
import {ApiKeyService} from '../../../common/services/api-key-service/api-key.service';
import {AuthService} from '../../../common/services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-update-user',
    templateUrl: './create-update-user.component.html',
    styleUrls: ['./create-update-user.component.css']
})
export class CreateUpdateUserComponent implements OnInit {
    userObj: any;
    selectedPermissions: any;
    isPasswordMatching: boolean;
    apiKeys: any;
    selectedApiKey: string;
    isLoading: boolean;
    isDarkMode: boolean;
    cloneUser: string;
    @Input() permissions: any;
    @Input() editUserObject;
    @Input() users;
    @Output() fnHideModal = new EventEmitter<any>();
    @Output() showDeleteModal = new EventEmitter<any>();
    @Output() showSuspendModal = new EventEmitter<any>();
    public emailRegEx: any = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');

    constructor(private _user: UserService, private _toastr: ToastrService, private _api: ApiKeyService, private _auth: AuthService,
                private _router: Router) {
        this.userObj = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
        this.selectedPermissions = [];
        this.apiKeys = [];
        this.selectedApiKey = '';
        this.isLoading = false;
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this.cloneUser = '';
    }

    ngOnInit() {
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        if (this.editUserObject) {
            this._user.fnGetUserPermissions(this.editUserObject['user-id'])
                .then(res => {
                    if (!_.isEmpty(res['user-permissions'])) {
                        this.selectedPermissions = res['user-permissions'];
                    }
                });
        }
        this._api.fnGetApiKeys().then(response => {
            if (response && response['account-authentication-tokens']) {
                this.apiKeys = response['account-authentication-tokens'];
            }
        });
        if (this.editUserObject) {
            setTimeout(() => {
                const { name, email } = this.editUserObject;
                this.userObj.name = name;
                this.userObj.email = email;
                this.userObj.password = 'PASSWORD';
                this.userObj.confirmPassword = 'PASSWORD';
                this.isPasswordMatching = true;
            }, 0);
        }
    }

    fnCreateUserClick(userObj, userForm) {
        const hashedPassword = hashSync(userObj.password, 8);
        const userObject: any = {
            name: userObj.name,
            email: userObj.email,
            'otp-enabled': false,
        };
        const permissionObject = {
            'user-permissions': this.selectedPermissions
        };

        if (this.userObj.password !== 'PASSWORD') {
            userObject.password = hashedPassword;
        }
        if (this.editUserObject) {
            this.isLoading = true;
                this._user.fnUpdateUser(userObject, this.editUserObject['user-id'])
                .then((response: any) => {
                    this._user.fnUpdateUserPermissions(permissionObject, this.editUserObject['user-id'])
                        .then(res => {
                            this.isLoading = false;
                            this._toastr.fnSuccess('User updated successfully.');
                        });
                    this.fnHideModal.next(true);
                })
                .catch((err) => {
                    this.isLoading = false;
                    if (err.status !== 401 && err.status !== 502 && err.status !== 404) {
                        this._toastr.fnWarning('User update failed.');
                    }
            });
        } else {
            if (this.cloneUser && (this.cloneUser === userObject['email']) ||
                _.findIndex(this.users, ins => ins['email'] === userObject['email']) > -1) {
                this._toastr.fnWarning('This user already exists.');
            } else {
                this.isLoading = true;
                this._user.fnCreateUser(userObject)
                    .then((response: any) => {
                        this.isLoading = false;
                        this._toastr.fnSuccess('User created successfully.');
                        this.fnHideModal.next(true);
                        this.cloneUser = '';
                        this._user.fnUpdateUserPermissions(permissionObject, response['user-id']);
                        this._router.navigate(['/users']);
                    })
                    .catch((err) => {
                        this.isLoading = false;
                        if (err.status !== 401 && err.status !== 502 && err.status !== 404) {
                            this._toastr.fnWarning('User creation failed.');
                        }
                    });
            }
        }

    }

    fnValidatePassword() {
        if (this.userObj.password !== this.userObj.confirmPassword) {
            this.isPasswordMatching = false;
        } else {
            this.isPasswordMatching = true;
        }
    }

    fnUpdateSelectedPermissions(event) {
        if (event.target.checked) {
            if (_.findIndex(this.selectedPermissions, per => per['permission-id'] === event.target.name) < 0) {
                this.selectedPermissions.push({
                    'permission-id' : event.target.name,
                    value: true
                });
            }
        } else {
            if (_.findIndex(this.selectedPermissions, per => per['permission-id'] === event.target.name) > -1) {
                this.selectedPermissions.splice(
                    _.findIndex(this.selectedPermissions, per => per['permission-id'] === event.target.name), 1
                );
            }
        }
    }

    fnCheckPermission(permission) {
        return _.findIndex(this.selectedPermissions, per => per['permission-id'] === permission['permission-id']) > -1;
    }

    fnShowDeleteModal(e) {
        e.preventDefault();
        this.showDeleteModal.next(this.editUserObject);
    }

    fnCloneUser() {
        this.editUserObject = null;
        this.cloneUser = this.userObj['name'];
        this.userObj.password = '';
        this.userObj.confirmPassword = '';
    }

    fnShowSuspendModal(e) {
        e.preventDefault();
        this.showSuspendModal.next(this.editUserObject);
    }
}
