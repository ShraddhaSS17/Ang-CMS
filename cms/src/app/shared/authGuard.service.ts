import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  IsLoggedIn(){
    return !!localStorage.getItem('userId');
  }
}
