import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {
  submitted = false;
  courseeditForm: FormGroup;
  coursedata:any = ['B.E/BTech', 'BCA/BSc', 'MCA/MSc', 'M.E/MTech', 'PGDBA'];
  course_data:Course[];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private actRoute:ActivatedRoute,
    private courseservice: CourseService
  ) {
    {
      this.course_data = []
      this.courseeditForm= this.fb.group({})
    }
   }

  ngOnInit(): void {
    this.updatecourse();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getcourse(id);
    this.courseeditForm =this.fb.group({
      name: ['', [Validators.required]],
      cat: ['', [Validators.required]],
      cd: ['', [Validators.required]],
    })
  }
  updateProfile(e: any){
    var element = e.target as HTMLSelectElement
    this.courseeditForm?.get('cat')?.setValue(element.value, {
      onlySelf: true
    })
  }
    getcourse(id: any) {
      this.courseservice.getcourse(id).subscribe(data => {
        this.courseeditForm.setValue({
          name: data['name'],
          cat: data['cat'],
          cd: data['cd'],
       
        });
      });
    }
  
    updatecourse() {
      this.courseeditForm = this.fb.group({
        name: ['', [Validators.required]],
      cat: ['', [Validators.required]],
      cd: ['', [Validators.required]],

      })
    }
  
    onSubmit() {
       if(window.confirm('Are you sure?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.courseservice.updatecourse(id, this.courseeditForm.value).subscribe(
          (res) => {
            this.router.navigateByUrl('/deletestudent');
            console.log('updated')
          },(error) => {
            alert('not updated')
            console.log(error);
          });
        }
       }
        
            
  
  }

