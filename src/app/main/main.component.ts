import {Component, HostListener, OnInit} from '@angular/core';
import {UserIdleService} from 'angular-user-idle';
import {AuthService} from '../common/services/auth-service/auth.service';
import {Router} from '@angular/router';
import {Constant} from '../common/constant';

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
                console.log( 'This page is not reloaded');
            }
        }
    }

    constructor(private userIdle: UserIdleService, private _auth: AuthService, private _router: Router) {
    }

    ngOnInit() {
        // Start watching for user inactivity.
        this.userIdle.startWatching();

        // Start watching when user idle is starting.
        this.userIdle.onTimerStart().subscribe(count => this.fnShowModal(count));

        // Start watch when time is up.
        this.userIdle.onTimeout().subscribe(() => this.fnLogOut());
    }

    fnShowModal(count) {
        this.remainingTime = Constant.SESSION_TIME - count;
        this.showModal = true;
    }

    fnLogOut() {
        console.log('Time is up!');
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
}
