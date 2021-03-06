import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ToastrService} from './services/toastr.service';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {AuthService} from './services/auth-service/auth.service';

@Injectable()
export class InterceptorProvider implements HttpInterceptor {
    constructor(private _toastr: ToastrService, private router: Router, private _auth: AuthService) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._auth.fnGetToken() && !request.headers.has('InterceptorSkipHeader')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${this._auth.fnGetToken()}`
                }
            });
        } else {
            if (request.headers.has('InterceptorSkipHeader')) {
                const headers = request.headers.delete('InterceptorSkipHeader');
                return next.handle(request.clone({ headers }));
            }
        }
        return next.handle(request)
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                    // do stuff with response if you want
                }
            }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    let message = '';
                    if (_.isObject(error.error)) {
                        message = error.error.message || 'Something went wrong. Internal server error.';
                    } else {
                        message = error.error || error.message || 'Something went wrong. Internal server error.';
                    }
                    switch (error.status) {
                        case 401:
                            localStorage.removeItem('AUTH_TOKEN');
                            localStorage.removeItem('USER_ID');
                            this._toastr.fnWarning(message);
                            this._auth.fnSignOut();
                            this.router.navigate(['/login']);
                            console.log(error.error);
                            break;
                        case 502:
                            // sign out user in case of server down issues.
                            if (error.error.code === 'ECONNRESET' || error.error.code === 'ECONNREFUSED' ||
                                error.error.code === 'ESOCKETTIMEDOUT') {
                                if (request.url.indexOf('session') === -1) {
                                    this._toastr.fnWarning('We are experiencing technical difficulties. You will be logged out now');
                                    this._auth.fnSignOut();
                                    this.router.navigate(['/login']);
                                }
                            } else {
                                this._toastr.fnWarning(message);
                                console.log(error.error);
                            }
                            break;
                        case 404:
                            this._toastr.fnWarning(message);
                            console.log(error.error);
                            break;
                        default:
                            console.log(error.error);
                    }
                }
            });
    }

    public isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}
