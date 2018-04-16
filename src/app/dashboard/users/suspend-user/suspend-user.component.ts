import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-suspend-user',
    templateUrl: './suspend-user.component.html',
    styleUrls: ['./suspend-user.component.css']
})
export class SuspendUserComponent implements OnInit {
    @Output() fnHideModal = new EventEmitter<any>();
    @Input() suspendUser: any;

    constructor(private _toastr: ToastrService) {
    }

    ngOnInit() {
    }

    fnSuspendUser(e) {
        e.stopPropagation();
        e.preventDefault();
        setTimeout(() => {
            let message = '';
            if (this.suspendUser.suspended) {
                message = 'User enabled successfully.';
            } else {
                message = 'User suspended successfully.';
            }
            this._toastr.fnSuccess(message);
            this.fnHideModal.next(this.suspendUser);
        }, 1000);
    }

    hideModal(e) {
        e.stopPropagation();
        e.preventDefault();
        this.fnHideModal.next();
    }

}
