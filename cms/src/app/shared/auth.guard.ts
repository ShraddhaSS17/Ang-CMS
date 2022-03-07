import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './authGuard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor (private AuthGuardService : AuthGuardService, private router : Router){

}

  canActivate(){
    if(this.AuthGuardService.IsLoggedIn())
    {
      return true;
    }
    alert('You are not logged in');
    this.router.navigate(['login']);
    return false;
  }
}
  
  

