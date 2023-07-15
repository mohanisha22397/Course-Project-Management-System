import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
//import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegistrationpageComponent } from './components/registrationpage/registrationpage.component';
//import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CoursewebdevComponent } from './components/coursewebdev/coursewebdev.component';
import { CoursemachinelearningComponent } from './components/coursemachinelearning/coursemachinelearning.component';
import { ProjectroboticsComponent } from './components/projectrobotics/projectrobotics.component';
import { ProjectiotComponent } from './components/projectiot/projectiot.component';
import { ProjectelectronicsComponent } from './components/projectelectronics/projectelectronics.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { KidzoneComponent } from './components/kidzone/kidzone.component';
//import { AdminComponent } from './components/admin/admin.component';

import { WorkshopfeesComponent } from './components/workshopfees/workshopfees.component';
import { KidzonefeesComponent } from './components/kidzonefees/kidzonefees.component';
import { CourseandroidappComponent } from './components/courseandroidapp/courseandroidapp.component';
import { CourseandroidappfeesComponent } from './components/courseandroidappfees/courseandroidappfees.component';
import { CoursemlfeesComponent } from './components/coursemlfees/coursemlfees.component';
import { CoursewebdevfeesComponent } from './components/coursewebdevfees/coursewebdevfees.component';
import { ProjectroboticsfeesComponent } from './components/projectroboticsfees/projectroboticsfees.component';
import { ProjectiotfeesComponent } from './components/projectiotfees/projectiotfees.component';
import { ProjectelectronicsfeesComponent } from './components/projectelectronicsfees/projectelectronicsfees.component';
import { CoursewebdevlearnerComponent } from './components/coursewebdevlearner/coursewebdevlearner.component';
import { CourseandroidlearnerComponent } from './components/courseandroidlearner/courseandroidlearner.component';
import { CoursemllearnerComponent } from './components/coursemllearner/coursemllearner.component';
import { ProjectroboticslearnerComponent } from './components/projectroboticslearner/projectroboticslearner.component';
import { ProjectelectronicslearnerComponent } from './components/projectelectronicslearner/projectelectronicslearner.component';
import { ProjectiotlearnerComponent } from './components/projectiotlearner/projectiotlearner.component';
import { WorkshoplearnerComponent } from './components/workshoplearner/workshoplearner.component';
import { PricingformComponent } from './components/pricingform/pricingform.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminkidzoneComponent } from './components/adminkidzone/adminkidzone.component';
import { AdmincoursesComponent } from './components/admincourses/admincourses.component';
import { AdminprojectsComponent } from './components/adminprojects/adminprojects.component';
import { AdminworkshopComponent } from './components/adminworkshop/adminworkshop.component';
//import { AdminpanelloginComponent } from './components/adminpanellogin/adminpanellogin.component';
//import { AdminpanelforgotpwComponent } from './components/adminpanelforgotpw/adminpanelforgotpw.component';
//import { AdminpanelregisterComponent } from './components/adminpanelregister/adminpanelregister.component';
//import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { RegistermainComponent } from './components/registermain/registermain.component';
import { Adminpanel2Component } from './components/adminpanel2/adminpanel2.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { MentorloginComponent } from './components/mentorlogin/mentorlogin.component';
import { UserComponent } from './components/user/user.component';
import { RoboiotmentorComponent } from './components/roboiotmentor/roboiotmentor.component';
import { MlmentorComponent } from './components/mlmentor/mlmentor.component';
import { EementorComponent } from './components/eementor/eementor.component';
import { WebandroidmentorComponent } from './components/webandroidmentor/webandroidmentor.component';
import { RoboiotmentorpanelComponent } from './components/roboiotmentorpanel/roboiotmentorpanel.component';
import { RoboiotdashboardComponent } from './components/roboiotdashboard/roboiotdashboard.component';
import { RoboiotlearnersComponent } from './components/roboiotlearners/roboiotlearners.component';
import { EementorpanelComponent } from './components/eementorpanel/eementorpanel.component';
import { EementordashboardComponent } from './components/eementordashboard/eementordashboard.component';
import { EelearnersComponent } from './components/eelearners/eelearners.component';
import { MlmentordashboardComponent } from './components/mlmentordashboard/mlmentordashboard.component';
import { MlmentorpanelComponent } from './components/mlmentorpanel/mlmentorpanel.component';
import { MllearnersComponent } from './components/mllearners/mllearners.component';
import { WebandroiddashboardComponent } from './components/webandroiddashboard/webandroiddashboard.component';
import { WebandroidlearnersComponent } from './components/webandroidlearners/webandroidlearners.component';
import { WebandroidmentorpanelComponent } from './components/webandroidmentorpanel/webandroidmentorpanel.component';
import { AdminlearnersComponent } from './components/adminlearners/adminlearners.component';
import { AdminmentorsComponent } from './components/adminmentors/adminmentors.component';
import { AdminstaffComponent } from './components/adminstaff/adminstaff.component';
import { LearnersComponent } from './components/learners/learners.component';
import { KidzonelearnerComponent } from './components/kidzonelearner/kidzonelearner.component';
import { Adminlogin2Component } from './components/adminlogin2/adminlogin2.component';
import { StudentpanelComponent } from './components/studentpanel/studentpanel.component';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
    FooterComponent,
    MainpageComponent,
    LoginpageComponent,
    RegistrationpageComponent,
   // PortfolioComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    CoursesComponent,
    ProjectsComponent,
    CoursewebdevComponent,
    CoursemachinelearningComponent,
    CourseandroidappComponent,
    ProjectroboticsComponent,
    ProjectiotComponent,
    ProjectelectronicsComponent,
    WorkshopComponent,
    KidzoneComponent,
    //AdminComponent,
    WorkshopfeesComponent,
    KidzonefeesComponent,
    CourseandroidappfeesComponent,
    CoursemlfeesComponent,
    CoursewebdevfeesComponent,
    ProjectroboticsfeesComponent,
    ProjectiotfeesComponent,
    ProjectelectronicsfeesComponent,
    CoursewebdevlearnerComponent,
    CourseandroidlearnerComponent,
    CoursemllearnerComponent,
    ProjectroboticslearnerComponent,
    ProjectelectronicslearnerComponent,
    ProjectiotlearnerComponent,
    WorkshoplearnerComponent,
    PricingformComponent,
    PaymentComponent,
    AdminkidzoneComponent,
    AdmincoursesComponent,
    AdminprojectsComponent,
    AdminworkshopComponent,
    //AdminpanelloginComponent,
    //AdminpanelforgotpwComponent,
   // AdminpanelregisterComponent,
   // AdminpanelComponent,
    RegistermainComponent,
    Adminpanel2Component,
    AdmindashboardComponent,
    MentorsComponent,
    MentorloginComponent,
    UserComponent,
    RoboiotmentorComponent,
    MlmentorComponent,
    EementorComponent,
    WebandroidmentorComponent,
    RoboiotmentorpanelComponent,
    RoboiotdashboardComponent,
    RoboiotlearnersComponent,
    EementorpanelComponent,
    EementordashboardComponent,
    EelearnersComponent,
    MlmentordashboardComponent,
    MlmentorpanelComponent,
    MllearnersComponent,
    WebandroiddashboardComponent,
    WebandroidlearnersComponent,
    WebandroidmentorpanelComponent,
    AdminlearnersComponent,
    AdminmentorsComponent,
    AdminstaffComponent,
    LearnersComponent,
    KidzonelearnerComponent,
    Adminlogin2Component,
    StudentpanelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // FormControl,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
