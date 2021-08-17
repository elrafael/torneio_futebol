import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CallInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      url: `${environment.apiUrl}${req.url}`,
      headers: req.headers.append('X-Auth-Token', environment.authToken)
    });

    return next.handle(clone);
  }

}
