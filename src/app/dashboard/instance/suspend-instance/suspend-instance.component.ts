import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {ToastrService} from '../../../common/services/toastr.service';

@Component({
    selector: 'app-suspend-instance',
    templateUrl: './suspend-instance.component.html',
    styleUrls: ['./suspend-instance.component.css']
})
export class SuspendInstanceComponent implements OnInit {
    @Output() fnHideModal = new EventEmitter<any>();

    constructor(private _instance: InstanceService, private _toastr: ToastrService) {
    }

    ngOnInit() {
    }

    fnSuspendInstance(e) {
        e.stopPropagation();
        e.preventDefault();
        this._instance.fnSuspendInstance().then((response: any) => {
            this._toastr.fnSuccess('Instance suspended successfully!');
            this.fnHideModal.next();
        }, (reject: any) => {
            this.fnHideModal.next();
        });
    }

    hideModal(e) {
        e.stopPropagation();
        e.preventDefault();
        this.fnHideModal.next();
    }

}
