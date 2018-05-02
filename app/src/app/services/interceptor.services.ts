import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpUserEvent,
    HttpResponse
} from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse |
        HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const url = environment.url;
        req = req.clone({
            url: url + req.url
        });

        return next.handle(req);
    }
}
