import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { collegeService } from '../college.service';
import { CourseService } from '../course.service';

export interface CourseObj{
  name:string;
  cat:String;
  cd:string;
  _id:string;
}
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})

export class CreatestudentComponent implements OnInit {

  submitted = false;
  studentForm: FormGroup;
  courseList: any =[];
 Studentdata:any = ['B.E/BTech', 'BCA/BSc', 'MCA/MSc', 'M.E/MTech', 'PGDBA'];
 collegedata:any=['Pune ','NMU','Mumbai','AMU'];
  //Image upload
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(
    public fb: FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private collegeservice: collegeService,
    private courseService: CourseService
  ){
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      course: ['', [Validators.required]],
      // college: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      filedoc:['',[Validators.required]]
      // ,Validators.pattern('/(\.jpg|\.jpeg|\.png|\.gif)$/i')]]
    })
  }
  ngOnInit() {
    //let course = this.courseService.getcourses();
    //var courseList= course.subscribe(this.courseService.createcourse.name) 
     this.courseService.getCourseNameList().subscribe(
      Courses => {
        let v = Courses as CourseObj[];
        this.courseList= v.map(a=>a.name);   
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  // upload(): void {
  //   this.progress = 0;
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //     if (file) {
  //       this.currentFile = file;
  //       this.collegeservice.upload(this.currentFile).subscribe({
  //         next: (event: any) => {
  //           if (event.type === HttpEventType.UploadProgress) {
  //             this.progress = Math.round(100 * event.loaded / event.total);
  //           } else if (event instanceof HttpResponse) {
  //             this.message = event.body.message;
  //             this.fileInfos = this.collegeservice.getFiles();
  //           }
  //         },
  //         complete:()=>{},
  //         error: (err: any) => {
  //           console.log(err);
  //           this.progress = 0;
  //           if (err.error && err.error.message) {
  //             this.message = err.error.message;
  //           } else {
  //             this.message = 'Could not upload the file!';
  //           }
  //           this.currentFile = undefined;
  //         }
  //       });
  //     }
  //     this.selectedFiles = undefined;
  //   }
  // }

  updateProfile(e: any){
    var element = e.target as HTMLSelectElement
    this.studentForm?.get('course')?.setValue(element.value, {
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
     this.collegeservice.createstudent(this.studentForm.value).subscribe(
      (res) => {
        // alert("added")
        console.log('Student record successfully created!')
        this.ngZone.run(() => this.router.navigateByUrl('/viewstudent'))
      }, (error) => {
        alert('not added')
        console.log(error);
      });
    // return true;
  }
// }


}
