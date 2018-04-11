import {Component, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth-service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from '../common/services/toastr.service';
import {Title} from '@angular/platform-browser';

interface LogIn {
    username: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    logInObject: LogIn;
    keepLoggedIn: boolean;

    constructor(private _auth: AuthService, private _router: Router,  private _toastr: ToastrService, private titleService: Title) {
        this.logInObject = {
            username: '',
            password: '',
        };
        this.keepLoggedIn = false;
    }

    ngOnInit() {
        this.titleService.setTitle('Login');
    }

    // call API on login button
    fnSignIn(signInObj: LogIn, myForm) {
        signInObj['keepLoggedIn'] = this.keepLoggedIn;
        this._auth.fnSignIn(signInObj)
            .then((response: any) => {
                this._toastr.fnSuccess('Logged in successfully.');
                this._router.navigate(['dashboard']);
            })
            .catch((error) => {
                if (error.status !== 401 && error.status !== 502) {
                    this._toastr.fnWarning('Login failed.');
                }
            });
    }

    fnCheckChange(e) {
        this.keepLoggedIn = e.target.checked;
    }

}
