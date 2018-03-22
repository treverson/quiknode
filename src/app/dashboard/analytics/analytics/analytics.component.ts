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
export class AnalyticsComponent implements OnInit  {
    @ViewChild('chartTarget') chartTarget: ElementRef;
    chart: Highcharts.ChartObject;

    public metricList: string[];
    public instanceList: any;
    public selectedMetric: string;
    public selctedInstance: any;
    public getMetricObj: any;
    public isMetric: boolean;
    public isLoding: boolean;

    constructor(private _instance: InstanceService) {
        this.metricList = [];
        this.instanceList = [];
        this.getMetricObj = {
            'instance-id': '',
            'metrics-type': '',
        };
    }

    ngOnInit() {
        this.metricList = [
            'http-requests',
            'websocket',
            'websocket-connections',
            'websocket-messages-in',
            'websocket-messages-out'
        ];
        this.selectedMetric = this.metricList[0];
        this._instance.fnGetInstances().then((response: any) => {
            this.instanceList = response.instances;
            this.selctedInstance = this.instanceList[0]['instance-id'];
            this.fnGetMetric();
        });
    }

    fnDisplayMetrics(columns, values) {
        const options: Highcharts.Options = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: columns[1] + ' inbound data'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%b\'%d', this.value);
                    }
                },
                tickPixelInterval: 200
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
                name: columns[1],
                data: values
            }]
        };

        this.chart = chart(this.chartTarget.nativeElement, options);
    }

    fnGetMetric() {
        this.isLoding = true;
        this.getMetricObj['instance-id'] = this.selctedInstance;
        this.getMetricObj['metrics-type'] = this.selectedMetric;
        this._instance.fnGetMetric(this.getMetricObj).then((response: any) => {
            this.isLoding = false;
            if (response.values) {
                this.isMetric = true;
                setTimeout(() => {
                    this.fnDisplayMetrics(response.columns, response.values);
                }, 0);
            } else {
                this.isMetric = false;
            }
        });
    }

}
