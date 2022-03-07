import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

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
  createcontact(data: any): Observable<any> {
    let url = `${this.baseUri}/contact`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
// Get all contacts
  getcontacts() {
  return this.http.get(`${this.baseUri}/contact`);
}

// Get contact
getcontact(id: any): Observable<any> {
  let url = `${this.baseUri}/contact/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Update contact
updatecontact(id: any, data: any): Observable<any> {
  let url = `${this.baseUri}/contact/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Delete employee
deletecontact(id: any): Observable<any> {
  let url = `${this.baseUri}/contact/${id}`;
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
