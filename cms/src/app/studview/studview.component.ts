import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-studview',
  templateUrl: './studview.component.html',
  styleUrls: ['./studview.component.css']
})
export class StudviewComponent implements OnInit {

  activity:any=[];

  constructor(private activityservice:ActivityService) {
  this.readactivity();
   }

  ngOnInit(): void {
  }
  readactivity(){
    this.activityservice.getactivitys().subscribe((data) => {
     this.activity = data;
    })    
  }
  removeactivity(stud: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.activityservice.deleteactivity(stud._id).subscribe((data) => {
          this.activity.splice(index, 1);
        }
      )    
    }
  }

}
