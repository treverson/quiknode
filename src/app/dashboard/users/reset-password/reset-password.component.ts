import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../../common/services/user-service/user.service';
import {hashSync} from 'bcryptjs';
import {ToastrService} from '../../../common/services/toastr.service';
import {AuthService} from '../../../common/services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    @Input() editUserObject;
    @Output() fnHideModal = new EventEmitter<any>();
    userObj: any;
    isPasswordMatching: boolean;
    isLoading: boolean;

    constructor(private _user: UserService, private _toastr: ToastrService, private _auth: AuthService,
                private _router: Router) {
        this.userObj = {
            password: '',
            confirmPassword: '',
        };
    }

    ngOnInit() {
    }

    fnUpdatePassword(userObj) {
        const hashedPassword = hashSync(userObj.password, 8);
        const userObject: any = {
            name: this.editUserObject.name,
            email: this.editUserObject.email,
            'otp-enabled': false,
        };

        if (this.editUserObject.password !== 'PASSWORD') {
            userObject.password = hashedPassword;
        }
        this.isLoading = true;
        this._user.fnUpdateUser(userObject, this.editUserObject['user-id'])
            .then((response: any) => {
                this._toastr.fnSuccess('Password successfully reset!');
                this.fnHideModal.next(true);
                this.isLoading = false;
                if (this._auth.fnGetUserId() === this.editUserObject['user-id']) {
                    this._auth.fnSignOut()
                        .then(res => {
                            this._router.navigate(['/login']);
                        });
                }
            })
            .catch((err) => {
                if (err.status !== 401 && err.status !== 502 && err.status !== 404) {
                    this._toastr.fnWarning('Password reset failed.');
                }
                this.isLoading = false;
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
