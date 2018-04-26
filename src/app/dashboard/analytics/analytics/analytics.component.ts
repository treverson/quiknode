import {AfterViewInit, Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import * as _ from 'lodash';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import * as HC_exporting from 'highcharts/modules/exporting';
import {AuthService} from '../../../common/services/auth-service/auth.service';
HC_exporting(Highcharts);

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit  {
    @ViewChild('chartTarget') chartTarget: ElementRef;
    @Input() instances?: any[];
    chart: Highcharts.ChartObject;

    public metricList: string[];
    public instanceList: any;
    public selectedMetric: string;
    public selectedInstance: any;
    public isLoading: boolean;
    public isDarkMode: boolean;
    public columns: any;
    public values: any;

    constructor(private _instance: InstanceService, private _auth: AuthService) {
        this.metricList = [];
        this.instanceList = [];
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
    }

    ngOnInit() {
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        Highcharts.setOptions({
            global: {
                useUTC: false,
            },
        });
        this._auth.uiModeChange.subscribe((isDarkMode) => {
            this.isDarkMode = isDarkMode;
            if (this.chart) {
                this.chart.destroy();
                setTimeout(() => {
                    this.fnDisplayMetrics(this.columns, this.values);
                }, 1000);
            }
        });
        this.metricList = [
            'http-requests',
            'websocket',
            'websocket-connections',
            'websocket-messages-in',
            'websocket-messages-out'
        ];
        this.selectedMetric = this.metricList[0];
        if (!this.instances || _.isEmpty(this.instances)) {
            this._instance.fnGetInstances().then((response: any) => {
                this.instanceList = response.instances;
                this.instanceList = _.orderBy(this.instanceList, [instance => instance.name.toLowerCase()]);
                this.selectedInstance = this.instanceList[0]['instance-id'];
                this._instance.instances.next(this.instanceList);
                this.fnGetMetric();
            }).catch(err => {
                this.fnDisplayMetrics(null, null);
            });
        }

        this._instance.selectedInstanceAnalytics.subscribe((instanceId) => {
            if (instanceId) {
                this.selectedInstance = instanceId;
                if (this.instances && !_.isEmpty(this.instances)) {
                    this.instanceList = this.instances;
                }
                this.fnGetMetric();
            }
        });
    }

    fnDisplayMetrics(columns, values) {
        let dataValues = _.cloneDeep(values);
        dataValues = _.map(dataValues, itemArray => {
            itemArray[0] = itemArray[0] * 1000;
            return itemArray;
        });
        if (!values) {
            dataValues = [[new Date().getTime(), 0]];
        }
        let options: Highcharts.Options = {
            chart: {
                zoomType: 'x'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
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
                name: columns ? columns[1] : this.selectedMetric,
                data: dataValues
            }]
        };

        if (this.isDarkMode) {
            options = _.assign({}, options, {chart: {
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                        stops: [
                        [0, 'rgb(0, 0, 0)'],
                        [1, 'rgb(1, 1, 0)']
                    ]
                },
                borderWidth: 0,
                    // plotBackgroundColor: 'rgba(1, 1, 1, .9)',
                    plotShadow: true,
                    plotBorderWidth: 0,
                    style: {
                    color: '#fff'
                }
            },
            title: {
                style: {
                    color: '#fff',
                },
                text: columns ? columns[1] : this.selectedMetric + ' inbound data'
            },
            xAxis: {
                type: 'datetime',
                    labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%b\'%d', this.value);
                    },
                    style: {
                        color: '#fff',
                    }
                },
                tickPixelInterval: 200,
                    title: {
                    style: {
                        color: '#fff',
                    }
                }
            },
            yAxis: {
                labels: {
                    style: {
                        color: '#fff',
                    }
                },
                title: {
                    text: 'Kb',
                    style: {
                        color: '#fff',
                    }
                }
            }});
        } else {
            options = _.assign({}, options,
                {
                    chart: {
                        backgroundColor: null,
                        borderWidth: 0,
                        plotBackgroundColor: null,
                        plotShadow: false,
                        plotBorderWidth: 0,
                        style: {
                        color: null,
                     }
                },
                title: {
                    style: {
                        color: null,
                    },
                    text: columns ? columns[1] : this.selectedMetric + ' inbound data'
                },
                xAxis: {
                    type: 'datetime',
                        labels: {
                        formatter: function () {
                            return Highcharts.dateFormat('%b\'%d', this.value);
                        },
                        style: {
                            color: null,
                        }
                    },
                    tickPixelInterval: 200,
                        title: {
                        style: {
                            color: null,
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style: {
                            color: null,
                        }
                    },
                    title: {
                        text: 'Kb',
                        style: {
                            color: null,
                        }
                    }
                }
            });
        }

        if (this.chartTarget) {
            this.chart = chart(this.chartTarget.nativeElement, options);
        }
    }

    fnGetMetric() {
        this.isLoading = true;
        const getMetricObj = {
            'instance-id': this.selectedInstance,
            'metrics-type':  this.selectedMetric,
        };
        this._instance.fnGetMetric(getMetricObj).then((response: any) => {
            this.isLoading = false;
            this.columns = response.columns;
            this.values = response.values;
            setTimeout(() => {
                this.fnDisplayMetrics(response.columns, response.values);
            }, 0);
        }).catch((error) => {
            this.isLoading = false;
            setTimeout(() => {
                this.fnDisplayMetrics(null, null);
            }, 0);
        });
    }

}
