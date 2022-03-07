import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CreateactivityComponent } from './createactivity/createactivity.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { EditactivityComponent } from './editactivity/editactivity.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParamComponent } from './param/param.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { StudviewComponent } from './studview/studview.component';
import { ViewactivityComponent } from './viewactivity/viewactivity.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'createstudent',component:CreatestudentComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'editstudent/:id',component:EditstudentComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'deletestudent',component:DeletestudentComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'viewstudent',component:ViewstudentComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'createcourse',component:CreatecourseComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'viewcontact',component:ViewcontactComponent},
{path:'editcourse/:id',component:EditcourseComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'viewcourse',component:ViewcourseComponent},

{path:'createactivity',component:CreateactivityComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'editactivity/:id',component:EditactivityComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'viewactivity',component:ViewactivityComponent},

{path:'createticket',component:CreateticketComponent,canActivate:[AuthGuard]},



{path:'studview',component:StudviewComponent},
{path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
