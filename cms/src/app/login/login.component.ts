import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm:any;
  email?: string ;
  password?: string;
    error?:string;

  constructor(private router: Router, 
    private authservice:AuthService,
    private ngZone: NgZone,
    public fb: FormBuilder,) { this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
    
   }

  ngOnInit(): void {
    
  }
  onSubmit(){
   
    this.authservice.login(this.loginForm.value).subscribe(
      (res) => {
        if(res!=null){
          console.log('Logged in successfully!')         
          if(this.email=="admin@dev.com" ){
      
            this.ngZone.run(() => this.router.navigateByUrl('/admin'))
            localStorage.setItem('userId',res._id);
            localStorage.setItem('userType','admin');
            }
            else{
        
              localStorage.setItem('userId',res._id);
              localStorage.setItem('userType','endUser');
              this.ngZone.run(() => this.router.navigateByUrl('/studview'))
          }
        }
        else {
          alert('Login could not be verified, please try with correct credentials');
          this.loginForm.reset();
        }
    
      }, (error) => {
        alert('Login failed')
        console.log(error);
      });
    }

    // this.authservice
    //  .login(data.email,data.password)
    //   .subscribe(s => this.router.navigate(['']), e => (this.error = e ));
  } 


