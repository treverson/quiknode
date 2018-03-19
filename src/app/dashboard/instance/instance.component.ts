import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../common/services/instance-service/instance.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-instance',
    templateUrl: './instance.component.html',
    styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {
    instances: any[];

    constructor(private _instance: InstanceService) {
    }

    ngOnInit() {
        this._instance.fnGetInstances().then((response: any) => {
            if (response && !_.isEmpty(response.instances)) {
                this.instances = response.instances;
            }
        });
    }

}
