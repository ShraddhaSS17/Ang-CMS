import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './college';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUri:string = 'http://127.0.0.1:5000'; // Backend URL (Server)
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  registeruser(data: any): Observable<any> {
    let url = `${this.baseUri}/user`;
    console.log(data);
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  checkuserexists(data:any):Observable<any> {
    // console.log('login cred',data);
    return this.http.post(`${this.baseUri}/checkUserExist`,data).pipe(
      catchError(this.errorMgmt)
    )//,pipe(
  }

// Error handling 
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}


}
