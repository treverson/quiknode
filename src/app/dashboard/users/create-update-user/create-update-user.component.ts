import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../../common/services/user-service/user.service';
import {hashSync} from 'bcryptjs';
import {ToastrService} from '../../../common/services/toastr.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-create-update-user',
    templateUrl: './create-update-user.component.html',
    styleUrls: ['./create-update-user.component.css']
})
export class CreateUpdateUserComponent implements OnInit {
    userObj: any;
    permissions: any;
    selectedPermissions: any;
    isPasswordMatching: boolean;
    @Input() editUserObject;
    @Output() fnHideModal = new EventEmitter<any>();
    public emailRegEx: any = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');

    constructor(private _user: UserService, private _toastr: ToastrService) {
        this.userObj = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
        this.permissions = [];
        this.selectedPermissions = [];
    }

    ngOnInit() {
        this._user.fnGetPermissions().then((response) => {
            this.permissions = response['permission'];
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
        if (this.userObj.password !== 'PASSWORD') {
            userObject.password = hashedPassword;
        }
        if (this.editUserObject) {
             this._user.fnUpdateUser(userObject, this.editUserObject['user-id'])
                .then((response: any) => {
                    this._toastr.fnSuccess('User updated successfully.');
                    this.fnHideModal.next(true);
                })
                .catch((err) => {
                    if (err.status !== 401 && err.status !== 502 && err.status !== 404) {
                        this._toastr.fnWarning('User update failed.');
                    }
            });
        } else {
             this._user.fnCreateUser(userObject)
                 .then((response: any) => {
                     this._toastr.fnSuccess('User created successfully.');
                     this.fnHideModal.next(true);
                 })
                 .catch((err) => {
                     if (err.status !== 401 && err.status !== 502 && err.status !== 404) {
                         this._toastr.fnWarning('User creation failed.');
                     }
             });
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
}
