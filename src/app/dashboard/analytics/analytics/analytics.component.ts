import {AfterViewInit, Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import * as HC_exporting from 'highcharts/modules/exporting';
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
    public selectedInstance: any;
    public isMetric: boolean;
    public isLoading: boolean;

    constructor(private _instance: InstanceService) {
        this.metricList = [];
        this.instanceList = [];
        this.isMetric = false;
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
        this._instance.instances.subscribe((instances) => {
            this.instanceList = instances;
            if (!this.selectedInstance) {
                this.selectedInstance = this.instanceList[0]['instance-id'];
                this.fnGetMetric();
            }
        });

        this._instance.selectedInstanceAnalytics.subscribe((instanceId) => {
            if (instanceId) {
                this.selectedInstance = instanceId;
                this.fnGetMetric();
            }
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
        this.isLoading = true;
        const getMetricObj = {
            'instance-id': this.selectedInstance,
            'metrics-type':  this.selectedMetric,
        };
        this._instance.fnGetMetric(getMetricObj).then((response: any) => {
            this.isLoading = false;
            if (response.values) {
                this.isMetric = true;
                setTimeout(() => {
                    this.fnDisplayMetrics(response.columns, response.values);
                }, 0);
            } else {
                this.isMetric = false;
            }
        }).catch((error) => {
            this.isMetric = false;
            this.isLoading = false;
        });
    }

}
