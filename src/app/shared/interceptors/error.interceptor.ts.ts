import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private readonly _snackBar: MatSnackBar, private readonly _dialogRef: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      url: `${environment.apiUrl}${req.url}`,
      headers: req.headers.append('X-Auth-Token', environment.authToken)
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
          this._openSnackBar('An error occurred:', error.error)
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
          this._openSnackBar(`Backend returned code ${error.status}, body was: ${error.error.message} `)
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      })
    )
  }

  private _openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, {
      panelClass: ['mat-toolbar', 'mat-warn'],
      duration: 5000
    })
    this._dialogRef.closeAll();
  }
}
