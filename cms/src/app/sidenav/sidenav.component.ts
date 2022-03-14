import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( private ngZone: NgZone,private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
  }

logout(){
  alert("logged out")
  localStorage.removeItem('userId');
  localStorage.removeItem('userType');
  this.ngZone.run(() => this.router.navigateByUrl('/home'))
  // this.header.isuserLoggedin=false;
  this.auth.isuserLoggedin=false;
}
}




