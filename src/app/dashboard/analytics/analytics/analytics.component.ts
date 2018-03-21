import {Component, OnInit} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
    public metricList: string[];
    public instanceList: any;
    public selectedMetric: string;

    constructor(private _instance: InstanceService) {
        this.metricList = [];
        this.instanceList = [];
        this.selectedMetric = '';
    }

    ngOnInit() {
        this.metricList = [
            'http-requests',
            'websocket',
            'websocket-connections',
            'websocket-messages-in',
            'websocket-messages-out'
        ];
        this._instance.fnGetInstances().then((response: any) => {
            this.instanceList = response.instances;
        });
    }

}
