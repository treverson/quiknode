import {Component, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth-service/auth.service';
import {ToastrService} from '../common/services/toastr.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean;
    currentPath: string;

    constructor(private _auth: AuthService, private _toastr: ToastrService, private _router: Router,
                private _location: Location) {
        this.isLoggedIn = this._auth.fnIsLoggedIn();
        this.currentPath = '';
    }

    ngOnInit() {
        this.currentPath = this._location.path();
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
    }
}
