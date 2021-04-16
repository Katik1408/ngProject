import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}
  errorMessage;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        console.log('HTTP INterceptor');
        console.log(err);

        console.log(err.status);

        switch (err.status) {
          case 0:
            this.errorMessage = err.statusText;
            console.log(err.statusText);
            break;
          case 400:
            this.errorMessage = err.error;
            break;
        }

        return throwError(this.errorMessage);
      })
    );
  }
}
