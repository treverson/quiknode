import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as HCs from 'highcharts';
import {chart} from 'highcharts';
import {InstanceService} from '../../../common/services/instance-service/instance.service';

@Component({
    selector: 'app-single-instance',
    templateUrl: './single-instance.component.html',
    styleUrls: ['./single-instance.component.css'],
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({display: 'block'})),
            state('hidden', style({display: 'none'})),
            transition('shown => hidden', animate('0.3s 600ms ease-out')),
            transition('hidden => shown', animate('0.1s 100ms ease-in')),
        ])
    ]
})
export class SingleInstanceComponent implements OnInit {
    @ViewChild('chartTarget1') chartTarget: ElementRef;
    chart: HCs.ChartObject;
    @Input() instance: any;
    @Output() fnShowCreateModal =  new EventEmitter<any>();
    @Output() fnShowSuspendModal =  new EventEmitter<any>();
    visibilityState: String;
    public getMetricObj: any;

    constructor(private _instance: InstanceService) {
        this.visibilityState = 'hidden';
        this.getMetricObj = {
            'instance-id': '',
            'metrics-type': '',
        };
    }

    ngOnInit() {
        if (this.instance) {
            this.fnGetMetric();
        }
    }

    fadeInFadeOut() {
        if (this.visibilityState === 'hidden') {
            this.visibilityState = 'shown';
        } else {
            this.visibilityState = 'hidden';
        }
    }

    showSuspendModal(e) {
        e.preventDefault();
        this.fnShowSuspendModal.next();
    }

    showCreateModal(e) {
        e.preventDefault();
        this.fnShowCreateModal.next(this.instance);

    }

    fnGetMetric() {
        this.getMetricObj['instance-id'] = this.instance['instance-id'];
        this.getMetricObj['metrics-type'] = 'http-requests';
        /*this._instance.fnGetMetric(this.getMetricObj).then((response: any) => {
            if (response.values) {
                setTimeout(() => {
                    this.fnDisplayMetrics(response.columns, response.values);
                }, 0);
            }
        });*/
    }

    fnDisplayMetrics(columns, values) {
        const options: HCs.Options = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'datetime',
                lineWidth: 0,
                minorGridLineWidth: 0,
                // lineColor: 'transparent',
                labels: {
                    enabled: false
                },
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    enabled: false
                },
                lineWidth: 0,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
            },
            responsive: [{
                rules: [{
                    condition: {
                        maxWidth: 200,
                    },
                    chartOptions: {
                        showAxes: false
                    }
                }]
            }],
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    lineWidth: 2
                }
            },
            series: [{
                type: 'spline',
                name: columns[1],
                data: values,
            }],
        };

        this.chart = chart(this.chartTarget.nativeElement, options);
    }

    populateChart() {
        this._instance.selectedInstanceAnalytics.next(this.instance['instance-id']);
    }

}
