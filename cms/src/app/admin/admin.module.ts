import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatestudentComponent } from '../createstudent/createstudent.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CreatestudentComponent

  ],
  imports: [
BrowserModule,
    AdminModule
  ]
})
export class AdminModule { }
