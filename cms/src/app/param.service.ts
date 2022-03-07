import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from './param';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  public url='/assets/data/param.json'
  constructor(private http:HttpClient) { }


  getdata():Observable<Param[]>{
    return this.http.get<Param[]>(this.url);
  }
}
