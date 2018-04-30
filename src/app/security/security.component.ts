import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
    selectedTab: string;

    constructor(private titleService: Title) {
        this.selectedTab = 'api-keys';
    }

    ngOnInit() {
        window.scroll(0, 0);
        this.titleService.setTitle('Security');
    }

    fnChangeTab(tab) {
        this.selectedTab = tab;
    }

}
