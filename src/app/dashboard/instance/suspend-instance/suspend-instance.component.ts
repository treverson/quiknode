import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-suspend-instance',
    templateUrl: './suspend-instance.component.html',
    styleUrls: ['./suspend-instance.component.css']
})
export class SuspendInstanceComponent implements OnInit {
    @Output() fnHideModal = new EventEmitter<any>();
    @Input() suspendInstance: any;

    constructor(private _instance: InstanceService, private _toastr: ToastrService) {
    }

    ngOnInit() {
    }

    fnSuspendInstance(e) {
        e.stopPropagation();
        e.preventDefault();
       /* this._instance.fnSuspendInstance().then((response: any) => {
            this._toastr.fnSuccess('Instance suspended successfully!');
            this.fnHideModal.next();
        }, (reject: any) => {
            this.fnHideModal.next();
        });*/
       setTimeout(() => {
           let message = '';
           if (this.suspendInstance.suspended) {
               message = 'Instance enabled successfully.';
           } else {
               message = 'Instance suspended successfully.';
           }
           this._toastr.fnSuccess(message);
           this.fnHideModal.next(this.suspendInstance);
       }, 1000);
    }

    hideModal(e) {
        e.stopPropagation();
        e.preventDefault();
        this.fnHideModal.next();
    }

}
