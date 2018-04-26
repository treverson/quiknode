import {Component, ElementRef, OnInit, ViewChild, HostListener} from '@angular/core';
import {AuthService} from '../common/services/auth-service/auth.service';
import {ToastrService} from '../common/services/toastr.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {InstanceService} from '../common/services/instance-service/instance.service';
declare var particlesJS: any;
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @ViewChild('menuButton') menuButton: ElementRef;
    isLoggedIn: boolean;
    currentPath: string;
    isToggledMenu: boolean;
    isMobileView: boolean;
    isDarkMode?: boolean;
    @HostListener('window:resize') onResize() {
        // guard against resize before view is rendered
        if (this.menuButton) {
            this.isMobileView = !!this.menuButton.nativeElement.offsetHeight;
            if (!this.isMobileView) {
                this.isToggledMenu = false;
            }
        }
    }

    constructor(private _auth: AuthService, private _toastr: ToastrService, private _router: Router,
                private _location: Location, private _instance: InstanceService) {
        this.isLoggedIn = this._auth.fnIsLoggedIn();
        this.currentPath = '';
        this.isMobileView = false;
        this.isToggledMenu = false;
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
    }

    ngOnInit() {
        this.currentPath = this._location.path();
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this._auth.uiModeChange.subscribe((isDarkMode) => {
            this.isDarkMode = isDarkMode;
        });
        this._router.events.subscribe(path => {
            if (path && path['url']) {
                this.currentPath = this._router.url;
            }
        });
        setTimeout(() => {
            if (document.getElementById('particles-back')) {
                particlesJS.load('particles-back', '/assets/particles.json', null);
            }
        }, 0);
    }

    fnLogOut() {
        this._auth.fnSignOut()
            .then(() => {
                this._toastr.fnSuccess('Logged out successfully.');
                this._router.navigate(['/']);
            });
    }

    fnChangeRoute() {
        setTimeout(() => {
            this.currentPath = this._location.path();
        });
        if (this.isMobileView && this.isToggledMenu) {
            this.fnToggleNav();
        }
    }

    fnToggleNav() {
        this.isToggledMenu = !this.isToggledMenu;
    }

    fnNotImplemented(e) {
        this._instance.fnNotImplemented(e);
    }

    fnHasUserPermission() {
        return this._auth.fnHasUserListPermission();
    }

    fnToggleUiMode(e) {
        e.preventDefault();
        this._auth.fnToggleUIMode();
    }
}
