import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.component.html',
  styleUrls: ['./editactivity.component.css']
})
export class EditactivityComponent implements OnInit {
  submitted = false;
  activityeditForm: FormGroup;
  act_data?:Activity[];
  constructor(
     public fb: FormBuilder,
    private router: Router,
    private actRoute:ActivatedRoute,
    private activityservice: ActivityService
  ){
    this.act_data = []
    this.activityeditForm= this.fb.group({})
  }
  ngOnInit(): void {
    this.updateactivity();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getactivity(id);
    this.activityeditForm =this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],
      date: ['', [Validators.required]],
    })

   }


  getactivity(id: any) {
    this.activityservice.getactivity(id).subscribe(data => {
      this.activityeditForm.setValue({
        name: data['name'],
        description: data['description'],
        
        imagePath: data['imagePath'],
        
        date: data['date'],
        
        
      });
    });
  }

  updateactivity() {
    this.activityeditForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],
      date: ['', [Validators.required]],

    })
  }

  onSubmit() {
     if(window.confirm('Are you sure?')){
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.activityservice.updateactivity(id, this.activityeditForm.value).subscribe(
        (res) => {
          this.router.navigateByUrl('/deleteactivity');
          console.log('updated')
        },(error) => {
          alert('not updated')
          console.log(error);
        });
      }
     }
      
          

}
