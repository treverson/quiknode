import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth-service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from '../common/services/toastr.service';
import {Title} from '@angular/platform-browser';
import * as $ from 'jquery';

interface LogIn {
    username: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    logInObject: LogIn;
    keepLoggedIn: boolean;
    isLoading: boolean;
    successCalls: number;

    constructor(private _auth: AuthService, private _router: Router,  private _toastr: ToastrService, private titleService: Title) {
        this.logInObject = {
            username: '',
            password: '',
        };
        this.keepLoggedIn = true;
        this.isLoading = false;
        this.successCalls = 0;
    }

    ngOnInit() {
        this.titleService.setTitle('Login');
        if (this._auth.fnGetIsDarkUiMode() && !$('body').hasClass('login')) {
            $('body').addClass('login');
        }
        this._auth.uiModeChange.subscribe((isDarkMode) => {
            if (isDarkMode && !$('body').hasClass('login')) {
                $('body').addClass('login');
            } else {
                $('body').removeClass('login');
            }
        });
    }

    // call API on login button
    fnSignIn(signInObj: LogIn, myForm) {
        signInObj['keepLoggedIn'] = this.keepLoggedIn;
        this.isLoading = true;
        this._auth.fnSignIn(signInObj, this.successCalls)
            .then((response: any) => {
                this.successCalls = this.successCalls + 1;
                if (this.successCalls === 2) {
                    this.isLoading = false;
                    this._toastr.fnSuccess('Logged in successfully.');
                    this._router.navigate(['dashboard']);
                } else if (this.successCalls < 2) {
                    this.fnSignIn(signInObj, myForm);
                }
            })
            .catch((error) => {
                this.isLoading = false;
                if (error.status !== 401) {
                    if (this.successCalls === 1) {
                        this._toastr.fnWarning('We are experiencing technical difficulties. Please try again later');
                    } else {
                        this._toastr.fnWarning('Login failed.');
                    }
                }
            });
    }

    fnCheckChange(e) {
        this.keepLoggedIn = e.target.checked;
    }

    ngOnDestroy() {
        $('body').removeClass('login');
    }
}
