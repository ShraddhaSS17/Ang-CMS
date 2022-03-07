import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { User } from './college';

@Injectable({
  providedIn: 'root'
})
export class collegeService {
 
  baseUri:string = 'http://127.0.0.1:5000'; // Backend URL (Server)
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
//  Image uplaod
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUri}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUri}/files`);
  }



//login Form


  // Create
  createstudent(data: any): Observable<any> {
    let url = `${this.baseUri}/student`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
// Get all students
  getstudents() {
  return this.http.get(`${this.baseUri}`);
}

// Get student
getstudent(id: any): Observable<any> {
  let url = `${this.baseUri}/student/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Update student
updatestudent(id: any, data: any): Observable<any> {
  let url = `${this.baseUri}/student/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Delete employee
deletestudent(id: any): Observable<any> {
  let url = `${this.baseUri}/student/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
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
