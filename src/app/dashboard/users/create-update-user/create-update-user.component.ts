import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../../common/services/user-service/user.service';
import {hashSync} from 'bcryptjs';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-create-update-user',
    templateUrl: './create-update-user.component.html',
    styleUrls: ['./create-update-user.component.css']
})
export class CreateUpdateUserComponent implements OnInit {
    userObj: any;
    isPasswordMatching: boolean;
    @Output() fnHideModal = new EventEmitter<any>();
    public emailRegEx: any = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');

    constructor(private _user: UserService, private _toastr: ToastrService) {
        this.userObj = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    ngOnInit() {
    }

    fnCreateUserClick(userObj, userForm) {
        const hashedPassword = hashSync(userObj.password, 8);
        const userObject = {
            name: userObj.name,
            email: userObj.email,
            password: hashedPassword,
        };
        userObject['otp-enabled'] = false;
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

    fnValidatePassword() {
        if (this.userObj.password !== this.userObj.confirmPassword) {
            this.isPasswordMatching = false;
        } else {
            this.isPasswordMatching = true;
        }
    }
}
