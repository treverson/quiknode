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

@Injectable()
export class InterceptorProvider implements HttpInterceptor {
    constructor() {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('AUTH_TOKEN')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${localStorage.getItem('AUTH_TOKEN')}`
                }
            });
        }
        return next.handle(request)
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                    // do stuff with response if you want
                }
            }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    switch (error.status) {
                        case 401:
                            localStorage.removeItem('AUTH_TOKEN');
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
