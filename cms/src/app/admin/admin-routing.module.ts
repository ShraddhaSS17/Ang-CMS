import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatestudentComponent } from '../createstudent/createstudent.component';

const routes: Routes = [
{path:'createstudent',component:CreatestudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
