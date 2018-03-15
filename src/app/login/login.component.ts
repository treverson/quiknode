import {Component, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth-service/auth.service';
import {Router} from '@angular/router';

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

    constructor(private _auth: AuthService, private _router: Router) {
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
                this._router.navigate(['dashboard']);
            })
            .catch((error) => {
                // Fixme: remove this once api starts working
                this._router.navigate(['dashboard']);
            });
    }

}
