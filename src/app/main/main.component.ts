import {Component, HostListener, OnInit} from '@angular/core';
import {UserIdleService} from 'angular-user-idle';
import {AuthService} from '../common/services/auth-service/auth.service';
import {Router} from '@angular/router';
import {Constant} from '../common/constant';
import {InstanceService} from '../common/services/instance-service/instance.service';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {UserService} from '../common/services/user-service/user.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    showModal: boolean;
    remainingTime: number;
    @HostListener('window:beforeunload') onUnload() {
        if (!this._auth.fnKeepLoggedIn()) {
            // check for Navigation Timing API support
            if (window.performance) {
                console.log('window.performance works fine on this browser');
            }
            if (performance.navigation.type === 1) {
                this.fnLogOut();
            } else {
                console.log('This page is not reloaded');
            }
        }
    }

    constructor(private userIdle: UserIdleService, private _auth: AuthService, private _router: Router,
                private _instance: InstanceService, private _user: UserService) {
    }

    ngOnInit() {
        // Start watching for user inactivity.
        this.userIdle.startWatching();

        // Start watching when user idle is starting.
        this.userIdle.onTimerStart().subscribe(count => this.fnShowModal(count));

        // Start watch when time is up.
        this.userIdle.onTimeout().subscribe(() => this.fnLogOut());
        this._user.fnGetPermissions()
            .then((res: any) => {
                this._user.fnGetUserPermissions(this._auth.fnGetUserId())
                    .then(resPermission => {
                        const findPer = _.find(res.permission, per => per['name'] === 'user:list');
                        if (findPer &&
                            _.findIndex(resPermission['user-permissions'], per =>
                                per['permission-id'] === findPer['permission-id']) > -1) {
                                this._auth.fnSetUserListPermission(true);
                        }
                    });
            });
        // this.fnGetInstances ();

        if (this._auth.fnGetIsDarkUiMode()) {
            $('body, .info-row, input,.input-field, .modal-overlay, .modal-content, .text-field, textarea, select, option, .navbar, .nav-link').addClass('dark');
        } else {
            $('body, .info-row, input,.input-field, .modal-overlay, .modal-content, .text-field, textarea, select, option, .navbar, .nav-link').removeClass('dark');
        }

        this._auth.uiModeChange.subscribe((isDarkMode) => {
            if (isDarkMode) {
                $('body, .info-row, input,.input-field, .modal-overlay, .modal-content, .text-field, textarea, select, option, .navbar, .nav-link').addClass('dark');
            } else {
                $('body, .info-row, input,.input-field, .modal-overlay, .modal-content, .text-field, textarea, select, option, .navbar, .nav-link').removeClass('dark');
            }
        });
    }

    fnShowModal(count) {
        this.remainingTime = Constant.SESSION_TIME - count;
        this.showModal = true;
    }

    fnLogOut() {
        this._auth.fnSignOut()
            .then(() => {
                this._router.navigate(['/']);
                this.showModal = false;
            });
        this.fnStop();
    }

    fnStop() {
        this.userIdle.stopTimer();
        this.showModal = false;
    }

    stopWatching() {
        this.userIdle.stopWatching();
    }

    startWatching() {
        this.userIdle.startWatching();
    }

    restart() {
        this.userIdle.resetTimer();
    }

    fnGetInstances () {
        this._instance.fnGetInstances().then((response: any) => {
            Observable.interval(1000 * 30).startWith(0).subscribe(x => {
                _.forEach(response.instances, instance => {
                    setTimeout(() => {
                        this.fnCreateTraffic (instance['name']);
                    }, 1000);
                });
            });
        });
    }

    fnCreateTraffic (instance) {
        this._instance.fnCreateTraffic(instance).then(response => {
        }).catch(err => {
        });
    }
}
