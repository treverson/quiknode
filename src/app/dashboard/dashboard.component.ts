import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    instances: any[]

    constructor() {
    }

    ngOnInit() {
        this.instances = [
            {
                "account-id": "fd9a5505-2221-4109-834b-5fedfb568fe8",
                "instance-id": "27e9b512-54bf-4ccf-8f34-47a0f93f6eb0",
                "name": "webosmotic test 1",
                "created": "2018-03-14T18:17:45.841998Z",
                "configuration": {
                    "validators": {
                        "http": {
                            "request": null
                        }
                    }
                }
            },
            {
                "account-id": "fd9a5505-2221-4109-834b-5fedfb568fe8",
                "instance-id": "27e9b512-54bf-4ccf-8f34-47a0f93f6eb0",
                "name": "webosmotic test 1",
                "created": "2018-03-14T18:17:45.841998Z",
                "configuration": {
                    "validators": {
                        "http": {
                            "request": null
                        }
                    }
                }
            }
        ]
    }
}
