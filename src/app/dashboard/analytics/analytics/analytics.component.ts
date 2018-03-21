import {AfterViewInit, Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import HC_exporting = require('highcharts/modules/exporting');
HC_exporting(Highcharts);

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit  {
    @ViewChild('chartTarget') chartTarget: ElementRef;
    chart: Highcharts.ChartObject;

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

    ngAfterViewInit() {
        const options: Highcharts.Options = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'WebSockets inbound data'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Kb'
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#1eb7e3'],
                            [1, (Highcharts.Color('#1eb7e3') as any).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 0,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: 'WebSockets IN',
                data: [
                    [
                        1370131200000,
                        0.7695
                    ],
                    [
                        1370217600000,
                        0.7648
                    ],
                    [
                        1370304000000,
                        0.7645
                    ],
                    [
                        1370390400000,
                        0.7638
                    ],
                    [
                        1370476800000,
                        0.7549
                    ],
                    [
                        1370563200000,
                        0.7562
                    ]]
            }]
        };

        this.chart = chart(this.chartTarget.nativeElement, options);
    }

}
