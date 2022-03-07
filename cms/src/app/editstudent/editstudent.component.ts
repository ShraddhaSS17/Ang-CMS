import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { College } from '../college';
import { collegeService } from '../college.service';
import { CourseService } from '../course.service';

export interface CourseObj{
  name:string;
  cat:String;
  cd:string;
  _id:string;
}
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  submitted = false;
  steditForm: FormGroup;
  stud_data:College[];
  courseList: any =[];
 Studentdata:any = ['B.E/BTech', 'BCA/BSc', 'MCA/MSc', 'M.E/MTech', 'PGDBA'];
 collegedata:any=['Pune college','NMU','Mumbai','AMU'];
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private actRoute:ActivatedRoute,
    private collegeservice: collegeService,
    private courseService:CourseService
  ){
    this.stud_data = []
    this.steditForm= this.fb.group({})
  }
    


  ngOnInit() {
    this.updatestudent();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getstudent(id);
    
    this.courseService.getCourseNameList().subscribe(
      Courses => {
        let v = Courses as CourseObj[];
        this.courseList= v.map(a=>a.name); });

    this.steditForm =this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      course: ['', [Validators.required]],
      // college: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })

   }

   updateProfile(e: any){
    var element = e.target as HTMLSelectElement
    this.steditForm?.get('course')?.setValue(element.value, {
      onlySelf: true
    })
  }



  getstudent(id: any) {
    this.collegeservice.getstudent(id).subscribe(data => {
      this.steditForm.setValue({
        name: data['name'],
        email: data['email'],
        course: data['course'],
        // college:data['college'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }

  updatestudent() {
    this.steditForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      course: ['', [Validators.required]],
      // college: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
     if(window.confirm('Are you sure?')){
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.collegeservice.updatestudent(id, this.steditForm.value).subscribe(
        (res) => {
          this.router.navigateByUrl('/viewstudent');
          console.log('updated')
        },(error) => {
          alert('not updated')
          console.log(error);
        });
      }
     }
      
          

}
