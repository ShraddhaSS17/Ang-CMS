import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  fileInfos?: Observable<any>;
  constructor(
    public fb: FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private registerservice: RegisterService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
this.registerservice.checkuserexists(this.registerForm.value).subscribe(
  (res) => {
    if(res!=null){
       alert("This Email already exists, please Login")
       this.ngZone.run(() => this.router.navigateByUrl('/login'))

    }
    else{
        
      this.registerservice.registeruser(this.registerForm?.value).subscribe(
        (res) => {
          alert("Registered successfully")
          console.log('Registered successfully')
          this.ngZone.run(() => this.router.navigateByUrl('/login'))
        }, (error) => {
          alert('not added')
          console.log(error);
        });
    }
   
  }, );

    

      // return true;
    }

}
