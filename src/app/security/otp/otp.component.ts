import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../common/services/instance-service/instance.service';
import * as Highcharts from 'highcharts';
import {AuthService} from '../../common/services/auth-service/auth.service';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
    isDarkMode?: boolean;
    constructor(private _instance: InstanceService, private _auth: AuthService) {
    }

    ngOnInit() {
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this._auth.uiModeChange.subscribe((isDarkMode) => {
            this.isDarkMode = isDarkMode;
        });
    }

    fnNotImplemented(e) {
        this._instance.fnNotImplemented(e);
    }

}
