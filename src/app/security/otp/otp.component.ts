import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../common/services/instance-service/instance.service';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

    constructor(private _instance: InstanceService) {
    }

    ngOnInit() {
    }

    fnNotImplemented(e) {
        this._instance.fnNotImplemented(e);
    }

}
