import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotAuthenticateGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url: string = state.url;
        return this.fnCheckAuthenticate(url);
    }

    fnCheckAuthenticate(url: string): boolean {

        if (!localStorage.getItem('AUTH_TOKEN')) {
            return true;
        }

        this.router.navigate(['/dashboard']);
        return false;
    }
}
