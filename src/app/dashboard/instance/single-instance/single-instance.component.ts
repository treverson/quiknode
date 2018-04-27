import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as HCs from 'highcharts';
import {chart} from 'highcharts';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {Location} from '@angular/common';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
    selector: 'app-single-instance',
    templateUrl: './single-instance.component.html',
    styleUrls: ['./single-instance.component.css'],
})
export class SingleInstanceComponent implements OnInit {
    @ViewChild('chartTarget1') chartTarget: ElementRef;
    @ViewChild('chartTarget1') set content(content: ElementRef) {
        this.chartTarget = content;
        if (this.chart) {
            this.chart.destroy();
            this.fnDisplayMetrics(this.columns, this.values);
        }
    }

    chart: HCs.ChartObject;
    @Input() instance: any;
    @Input() viewType: any;
    @Input() instances: any[];
    @Output() fnShowCreateModal =  new EventEmitter<any>();
    @Output() fnShowAnalyticsModal =  new EventEmitter<any>();
    public getMetricObj: any;
    public columns: any;
    public values: any;
    public created: any;

    constructor(private _instance: InstanceService, private _location: Location) {
        this.getMetricObj = {
            'instance-id': '',
            'metrics-type': '',
        };
        this.created = this.instance ? moment(this.instance.created).format('MM-DD-YYYY') : '';
    }

    ngOnInit() {
        if (this.instance) {
            this.created = moment(this.instance.created).format('MM-DD-YYYY');
            this.fnGetMetric();
        }
    }

    showCreateModal(e) {
        e.preventDefault();
        this.fnShowCreateModal.next(this.instance);
    }

    fnGetMetric() {
        this.getMetricObj['instance-id'] = this.instance['instance-id'];
        this.getMetricObj['metrics-type'] = 'http-requests';
        this._instance.fnGetMetric(this.getMetricObj).then((response: any) => {
            this.columns = response.columns;
            this.values = response.values;
            if (response.values) {
                setTimeout(() => {
                    this.fnDisplayMetrics(response.columns, response.values);
                }, 0);
            }
        });
    }

    fnDisplayMetrics(columns, values) {
        if (values.length > 100) {
            values = _.takeRight(values, 20);
        }
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
                },
                spline: {
                    marker: {
                        enabled: false,
                    }
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

    populateChart(e) {
        e.stopPropagation();
        e.preventDefault();
        window.scroll(0, 0);
        if (!this._location.path().includes('dashboard')) {
            this.fnShowAnalyticsModal.next();
        }
        setTimeout(() => {
            this._instance.selectedInstanceAnalytics.next(this.instance['instance-id']);
        }, 0);
    }
}
