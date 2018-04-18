import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../common/services/user-service/user.service';
import {ToastrService} from '../../common/services/toastr.service';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
    userObject: any;
    isLoading: boolean;
    showResetPasswordModal: boolean;
    @Output() fnHideModal = new EventEmitter<any>();
    public emailRegEx: any = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');

    constructor(private _user: UserService, private _toastr: ToastrService) {
        this.userObject = {
            name: '',
            email: ''
        };
        this.isLoading = false;
    }

    ngOnInit() {
        this._user.fnGetUser()
            .then(response => {
                this.userObject = response;
            });
    }

    fnSaveAccount(e, userObject) {
        e.preventDefault();
        e.stopPropagation();
        this.isLoading = true;
        this._user.fnUpdateUser(userObject, userObject['user-id'])
            .then(response => {
                this.isLoading = false;
                this.fnHideModal.next();
                this._toastr.fnSuccess('Account updated successfully.');
            }).catch(error => {
                this.isLoading = false;
        });
    }

    fnShowResetPasswordModal(e) {
        e.preventDefault();
        this.showResetPasswordModal = true;
    }

    fnHideResetPasswordModal () {
        this.showResetPasswordModal = false;
    }

}
