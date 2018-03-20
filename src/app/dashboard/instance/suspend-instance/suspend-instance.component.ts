import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-suspend-instance',
    templateUrl: './suspend-instance.component.html',
    styleUrls: ['./suspend-instance.component.css']
})
export class SuspendInstanceComponent implements OnInit {
    @Output() onHideModal = new EventEmitter<any>();

    constructor(private _instance: InstanceService, private _toastr: ToastrService) {
    }

    ngOnInit() {
    }

    suspendInstance() {
        this._instance.suspendInstance().then((response: any) => {
            this._toastr.fnSuccess('Instance suspended successfully!');
            this.onHideModal.next();
        }, (reject: any) => {
            this._toastr.fnError(reject.error);
            this.onHideModal.next();
        });
    }

    hideModal() {
        this.onHideModal.next();
    }

}
