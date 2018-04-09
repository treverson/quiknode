import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
    selectedTab: string;

    constructor() {
        this.selectedTab = 'api-keys';
    }

    ngOnInit() {
    }

    fnChangeTab(tab) {
        this.selectedTab = tab;
    }

}
