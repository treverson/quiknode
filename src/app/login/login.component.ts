import {Component, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth-service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from '../common/services/toastr.service';

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

    constructor(private _auth: AuthService, private _router: Router,  private _toastr: ToastrService) {
        this.logInObject = {
            username: '',
            password: '',
        };
    }

    ngOnInit() {
    }

    // call API on login button
    fnSignIn(signInObj: LogIn, myForm) {
        this._auth.fnSignIn(signInObj)
            .then((response: any) => {
                this._toastr.fnSuccess('Logged in successfully.');
                this._router.navigate(['dashboard']);
            })
            .catch((error) => {
                this._toastr.fnWarning('Login failed.');
            });
    }

}
