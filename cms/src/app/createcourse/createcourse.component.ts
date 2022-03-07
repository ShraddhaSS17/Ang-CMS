import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {
  submitted = false;
  courseForm: FormGroup;
 coursedata:any = ['B.E/BTech', 'BCA/BSc', 'MCA/MSc', 'M.E/MTech', 'PGDBA'];
 
  constructor( public fb: FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private courseservice: CourseService) {
      this.courseForm = this.fb.group({
        name: ['', [Validators.required]],
        cat: ['', [Validators.required]],
        cd: ['', [Validators.required]],
      })
     }

  ngOnInit(): void {
  }
  updateProfile(f: any){
    var element = f.target as HTMLSelectElement
    this.courseForm?.get('cd')?.setValue(element.value, {
      onlySelf: true
    })
  }

// Getter to access form control
// get myForm()
// {
//   return this.studentForm.controls;
// }

onSubmit() {
  // alert("hi")
  // this.submitted = true;
  // if (!this.studentForm.valid) {
  //   return false;
  // } else {
    // alert("yes")
     this.courseservice.createcourse(this.courseForm?.value).subscribe(
      (res) => {
        // alert("added")
        console.log('Student record successfully created!')
        this.ngZone.run(() => this.router.navigateByUrl('/viewcourse'))
      }, (error) => {
        alert('not added')
        console.log(error);
      });
    // return true;
  }
// }


}


