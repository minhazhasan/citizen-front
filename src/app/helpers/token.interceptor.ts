import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (request.headers.has(InterceptorSkipHeader)) {
            const headers = request.headers.delete(InterceptorSkipHeader);
            return next.handle(request.clone({ headers }));
        }
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    "Content-type": "application/json",
                    'Session-Token': `${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}