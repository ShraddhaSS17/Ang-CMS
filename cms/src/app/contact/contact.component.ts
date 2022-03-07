import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


    submitted = false;
    contactForm: FormGroup;
 
 
    constructor( public fb: FormBuilder,
      private router:Router,
      private ngZone: NgZone,
      private contactservice: ContactService) {
        this.contactForm = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required]],
           mobile: ['', [Validators.required]],
       
        })
       }
  
    ngOnInit(): void {

  
  

    }
  
 

  
  onSubmit() {
  
    this.contactservice.createcontact(this.contactForm.value).subscribe(
      (res) => {
          // alert("added")
          console.log('Activity successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl(''))
        }, (error) => {
          alert('not added')
          console.log(error);
        });
        this.contactForm?.reset();
  
      // return true;
    }
  // }
  
  
  }
  
