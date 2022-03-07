import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  course:any=[];

  constructor(private courseservice:CourseService) {
  this.readcourse();
   }

  ngOnInit(): void {
  }
  readcourse(){
    this.courseservice.getcourses().subscribe((data) => {
     this.course = data;
    })    
  }
  removecourse(stud: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.courseservice.deletecourse(stud._id).subscribe((data) => {
          this.course.splice(index, 1);
        }
      )    
    }
  }

}
