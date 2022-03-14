import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { DeletecourseComponent } from './deletecourse/deletecourse.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { CreateactivityComponent } from './createactivity/createactivity.component';
import { DeleteactivityComponent } from './deleteactivity/deleteactivity.component';
import { ViewactivityComponent } from './viewactivity/viewactivity.component';
import { EditactivityComponent } from './editactivity/editactivity.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { EditticketComponent } from './editticket/editticket.component';
import { ViewaticketComponent } from './viewaticket/viewaticket.component';
import { DeleteticketComponent } from './deleteticket/deleteticket.component';
import { collegeService, } from './college.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { CourseService } from './course.service';
import { ActivityService } from './activity.service';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudviewComponent } from './studview/studview.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { FooterComponent } from './footer/footer.component';
import { ParamComponent } from './param/param.component';
import { Interceptor } from './interceptor';
// import {MatToolbarModule} from '@angular/material/toolbar'
// import{MatSidenavModule} from '@angular/material/sidenav'
// import{MatIconModule} from '@angular/material/icon'
// import{MatButtonModule} from '@angular/material/button'
// import{MatListModule} from '@angular/material/list'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ViewComponent,
    ContactComponent,
    AdminComponent,
    CreatestudentComponent,
    EditstudentComponent,
    DeletestudentComponent,
    ViewstudentComponent,
    CreatecourseComponent,
    ViewcourseComponent,
    DeletecourseComponent,
    EditcourseComponent,
    CreateactivityComponent,
    DeleteactivityComponent,
    ViewactivityComponent,
    EditactivityComponent,
    CreateticketComponent,
    EditticketComponent,
    ViewaticketComponent,
    DeleteticketComponent,
    LoginComponent,
    RegisterComponent,
    ViewcontactComponent,
    SidenavComponent,
    StudviewComponent,
    FooterComponent,
    ParamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
// MatButtonModule,
// MatIconModule,MatListModule,MatSidenavModule,MatToolbarModule
  ],
  providers: [collegeService,AuthService,RegisterService,CourseService,ActivityService,
  {provide:HTTP_INTERCEPTORS, useClass:Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
