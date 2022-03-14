import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
// import{activity} from '../../../../backend/models/activity.js'

@Component({
  selector: 'app-createactivity',
  templateUrl: './createactivity.component.html',
  styleUrls: ['./createactivity.component.css']
})
export class CreateactivityComponent implements OnInit ,OnDestroy{
activities:Activity[]=[];
private activitySubscription?: Subscription;
  submitted = false;
  activityForm: FormGroup;
  imageData:any;
  //Image upload
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor( public fb: FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private activityservice: ActivityService) {
      this.activityForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
         image: ['', [Validators.required]],
        date: ['', [Validators.required]],
      })
     }

  ngOnInit(): void {
this.activityservice.getActvity();
this.activitySubscription = this.activityservice.getactivityStream().subscribe((
   activities: Activity[])=>{
     this.activities=this.activities
   }
)

    // this.activityForm = new FormGroup({
    //   image: new FormControl(null)
    // })
  }

  ngOnDestroy() {
    this.activitySubscription?.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
  selectFile(event: any): void {
    const file =(event.target as HTMLInputElement).files?.item(0);
    this.activityForm.patchValue({image:file})
    const allowedFileTypes=["image/png","image/jpeg","image/jpg"]
    if(file && allowedFileTypes.includes(file.type)){

      const reader= new FileReader();
      reader.onload=() =>{
         this.imageData=reader.result as string;
       }
       reader.readAsDataURL(file);

      }
    // this.selectedFiles = event.target.files;
  }
  // upload(): void {
  //   this.progress = 0;
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //     if (file) {
  //       this.currentFile = file;
  //       this.activityservice.upload(this.currentFile).subscribe({
  //         next: (event: any) => {
  //           if (event.type === HttpEventType.UploadProgress) {
  //             this.progress = Math.round(100 * event.loaded / event.total);
  //           } else if (event instanceof HttpResponse) {
  //             this.message = event.body.message;
  //             this.fileInfos = this.activityservice.getFiles();
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


// Getter to access form control
// get myForm()
// {
//   return this.studentForm.controls;
// }

onSubmit() {

  // this.activityservice.uploadImage(this.imageData).subscribe(
  //   (res) => {
  //     if(res=="Image uploaded successfully")
  //     console.log(res); 
  //     else console.log("image upload failed")    
  //   }, (error) => {
  //     alert('Upload image failed')
  //     console.log(error);
  //   });

     this.activityservice.createactivity(this.activityForm?.value, this.activityForm.value.image.name).subscribe(
      (res) => {
        // alert("added")
        console.log('Activity successfully created!')
        this.ngZone.run(() => this.router.navigateByUrl('/viewactivity'))
      }, (error) => {
        alert('not added')
        console.log(error);
      });
      this.activityForm.reset();
this.imageData = null;
    // return true;
  }
// }


}



