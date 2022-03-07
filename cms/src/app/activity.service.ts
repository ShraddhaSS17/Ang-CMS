import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  baseUri:string = 'http://127.0.0.1:5000'; // Backend URL (Server)
  headers = new HttpHeaders().set('Content-Type', 'application/json');

private activities$= new Subject<Activity[]>()
  private activities: Activity[] =[];

  constructor(private http: HttpClient) { }
//  Image uplaod

getActvity(){
  this.http.get<{activities : Activity[]}>(this.baseUri).pipe(
    map((activityData)=>{
      return activityData.activities;
    })
  ).subscribe((activities) =>{
    this.activities=activities;
    this.activities$.next(this.activities);

  })
}
 getactivityStream(){
   return this.activities$.asObservable();
 }
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
  createactivity(data: any, imageName : string): Observable<any> {
    let url = `${this.baseUri}/activity`;
    return this.http.post(url, {name:data.name, description:data.description,imagePath: 'http://localhost:4200/images/' + imageName,date:data.date})
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  uploadImage( image: File): Observable<any> {
    let url = `${this.baseUri}/upload-image`;
    return this.http.post(url, image)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

// Get all activitys
  getactivitys() {
  return this.http.get(`${this.baseUri}/activity`);
}

// Get activity
getactivity(id: any): Observable<any> {
  let url = `${this.baseUri}/activity/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Update activity
updateactivity(id: any, data: any): Observable<any> {
  let url = `${this.baseUri}/activity/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Delete employee
deleteactivity(id: any): Observable<any> {
  let url = `${this.baseUri}/activity/${id}`;
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
