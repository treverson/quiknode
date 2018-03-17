import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {
    constructor(private _router: Router, private _auth: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url: string = state.url;
        return this.fnCheckAuthenticate(url);
    }

    /**
     * check Authenticate.
     * @param {string} url
     */
    private fnCheckAuthenticate(url: string): boolean {
        if (this._auth.fnGetToken()) {
            if (url.indexOf('login') > -1 || url === '/') {
                this._router.navigate(['/dashboard']);
            }
            return true;
        } else {
            this.fnDeleteData();
            this._router.navigate(['/login']);
            return false;
        }
    }

    /**
     * Delete all storage data
     */
    private fnDeleteData() {
        localStorage.removeItem('AUTH_TOKEN');
    }
}
