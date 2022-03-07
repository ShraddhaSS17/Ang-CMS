
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, pipe, Subject, switchMap, throwError } from 'rxjs';
import { __param } from 'tslib';
  // import { User } from './college';
export interface User{
  name:string;
  email:String;
  password:string;
  _id:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private user$= new Subject<User>();
 baseUri:string = 'http://127.0.0.1:5000'; // Backend URL (Server)

  constructor(private httpclient: HttpClient) { }

  login(data:any){
    //const logincred= {email, password};
    console.log('login cred',data);
    return this.httpclient.post<User>(`${this.baseUri}/login`,data).pipe(
      catchError(this.errorMgmt)
    )//,pipe(
      // switchMap (foundUser =>{
      //     //  this.setUser(foundUser);
      //     console.log('User Found', foundUser)
      //      return of(foundUser);
      //   }
      //),
// catchError(e =>{
//   console.log(`your login details could not be verfied.please try again`,e);
//   return throwError(`your login details could not be verfied.please try again`);
// })
//     )
  }

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

logout(){
  // this. (null);
  console.log('user did logout successfully');
}
  get user(){
    return this.user$.asObservable();
  }
}
