import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {UserService} from '../../../common/services/user-service/user.service';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-delete-user',
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
    @Output() fnHideModal = new EventEmitter<any>();
    @Input() user: any;

    constructor(private _user: UserService, private _toastr: ToastrService) {
    }

    ngOnInit() {
    }

    fnDeleteUser(e) {
        e.stopPropagation();
        e.preventDefault();
        /*this._user.fnDeleteUser(this.user['user-id']).then((response: any) => {
            this._toastr.fnSuccess('User deleted successfully!');
            this.fnHideModal.next();
        }, (reject: any) => {
            if (reject.status !== 401 && reject.status !== 502 && reject.status !== 404) {
                this._toastr.fnWarning('User delete failed.');
            }
            this.fnHideModal.next();
        });*/
        this._toastr.fnSuccess('User deleted successfully!');
        this.fnHideModal.next(this.user);
    }

    hideModal(e) {
        e.stopPropagation();
        e.preventDefault();
        this.fnHideModal.next();
    }

}
