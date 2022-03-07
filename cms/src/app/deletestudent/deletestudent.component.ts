import { Component, OnInit } from '@angular/core';
import { collegeService } from '../college.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {
  student:any=[]
  constructor(private collegeservice:collegeService) { }

  ngOnInit(): void {
  }
  readstudent(){
    this.collegeservice.getstudents().subscribe((data) => {
     this.student = data;
    })    
  }
  removestudent(stud: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.collegeservice.deletestudent(stud._id).subscribe((data) => {
          this.student.splice(index, 1);
        }
      )    
    }
  }
}
