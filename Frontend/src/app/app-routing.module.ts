import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AboutComponent } from './components/about/about.component';

//import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegistrationpageComponent } from './components/registrationpage/registrationpage.component';
import { RegistermainComponent } from './components/registermain/registermain.component';

import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingformComponent } from './components/pricingform/pricingform.component';

import { CoursesComponent } from './components/courses/courses.component';
import { CourseandroidappComponent } from './components/courseandroidapp/courseandroidapp.component';
import { CoursewebdevComponent } from './components/coursewebdev/coursewebdev.component';
import { CoursemachinelearningComponent } from './components/coursemachinelearning/coursemachinelearning.component';

import { CourseandroidappfeesComponent } from './components/courseandroidappfees/courseandroidappfees.component';
import { CoursewebdevfeesComponent } from './components/coursewebdevfees/coursewebdevfees.component';
import { CoursemlfeesComponent } from './components/coursemlfees/coursemlfees.component';



import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectelectronicsComponent } from './components/projectelectronics/projectelectronics.component';
import { ProjectiotComponent } from './components/projectiot/projectiot.component';
import { ProjectroboticsComponent } from './components/projectrobotics/projectrobotics.component';

import { ProjectiotfeesComponent } from './components/projectiotfees/projectiotfees.component';
import { ProjectelectronicsfeesComponent } from './components/projectelectronicsfees/projectelectronicsfees.component';
import { ProjectroboticsfeesComponent } from './components/projectroboticsfees/projectroboticsfees.component';

import { WorkshopComponent } from './components/workshop/workshop.component';
import { KidzoneComponent } from './components/kidzone/kidzone.component';

import { WorkshopfeesComponent } from './components/workshopfees/workshopfees.component';
import { KidzonefeesComponent } from './components/kidzonefees/kidzonefees.component';

// import { AdminComponent } from './components/admin/admin.component';
//import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { Adminlogin2Component } from './components/adminlogin2/adminlogin2.component';

import { AdminprojectsComponent } from './components/adminprojects/adminprojects.component';
import { AdmincoursesComponent} from './components/admincourses/admincourses.component';
import { AdminworkshopComponent } from './components/adminworkshop/adminworkshop.component';
import { AdminkidzoneComponent } from './components/adminkidzone/adminkidzone.component';

import { AdminpanelloginComponent } from './components/adminpanellogin/adminpanellogin.component';
import { AdminpanelregisterComponent } from './components/adminpanelregister/adminpanelregister.component';
import { AdminpanelforgotpwComponent } from './components/adminpanelforgotpw/adminpanelforgotpw.component';

import { PaymentComponent } from './components/payment/payment.component';

import { MentorsComponent } from './components/mentors/mentors.component';
import { MentorloginComponent } from './components/mentorlogin/mentorlogin.component';

import { AdminlearnersComponent } from './components/adminlearners/adminlearners.component';
import { Adminpanel2Component } from './components/adminpanel2/adminpanel2.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

import { UserComponent } from './components/user/user.component';

import { RoboiotdashboardComponent } from './components/roboiotdashboard/roboiotdashboard.component';
import { RoboiotlearnersComponent } from './components/roboiotlearners/roboiotlearners.component';
import { RoboiotmentorComponent } from './components/roboiotmentor/roboiotmentor.component';
import { RoboiotmentorpanelComponent } from './components/roboiotmentorpanel/roboiotmentorpanel.component';

import { WebandroiddashboardComponent } from './components/webandroiddashboard/webandroiddashboard.component';
import { WebandroidlearnersComponent } from './components/webandroidlearners/webandroidlearners.component';
import { WebandroidmentorComponent } from './components/webandroidmentor/webandroidmentor.component';
import { WebandroidmentorpanelComponent } from './components/webandroidmentorpanel/webandroidmentorpanel.component';

import { MllearnersComponent } from './components/mllearners/mllearners.component';
import { MlmentorComponent } from './components/mlmentor/mlmentor.component';
import { MlmentordashboardComponent } from './components/mlmentordashboard/mlmentordashboard.component';
import { MlmentorpanelComponent } from './components/mlmentorpanel/mlmentorpanel.component';

import { EelearnersComponent } from './components/eelearners/eelearners.component';
import { EementorComponent } from './components/eementor/eementor.component';
import { EementordashboardComponent } from './components/eementordashboard/eementordashboard.component';
import { EementorpanelComponent } from './components/eementorpanel/eementorpanel.component';
import { LearnersComponent } from './components/learners/learners.component';
import { WorkshoplearnerComponent } from './components/workshoplearner/workshoplearner.component';
import { CoursewebdevlearnerComponent } from './components/coursewebdevlearner/coursewebdevlearner.component';
import { CourseandroidlearnerComponent } from './components/courseandroidlearner/courseandroidlearner.component';
import { CoursemllearnerComponent } from './components/coursemllearner/coursemllearner.component';
import { ProjectiotlearnerComponent } from './components/projectiotlearner/projectiotlearner.component';
import { ProjectelectronicslearnerComponent } from './components/projectelectronicslearner/projectelectronicslearner.component';
import { ProjectroboticslearnerComponent } from './components/projectroboticslearner/projectroboticslearner.component';
import { AdminmentorsComponent } from './components/adminmentors/adminmentors.component';
import { KidzonelearnerComponent } from './components/kidzonelearner/kidzonelearner.component';





const routes: Routes = [{path:'', component: MainpageComponent},
  {path:'about', component: AboutComponent},
 {path:'pricing', component: PricingComponent},
 {path:'pricingform', component: PricingformComponent},
 {path:'payment', component: PaymentComponent},
//  {path: 'portfolio', component: PortfolioComponent},
 {path: 'contact', component: ContactComponent},
{path:'loginpage', component: LoginpageComponent},
{path: 'registrationpage', component: RegistrationpageComponent},
{path:'registermain', component: RegistermainComponent},
{path: 'courses', component: CoursesComponent},
{path:'courseandroidapp', component: CourseandroidappComponent},
{path:'coursewebdev', component: CoursewebdevComponent},
{path:'coursemachinelearning', component: CoursemachinelearningComponent},
{path: 'projects', component: ProjectsComponent},
{path:'projectelectronics', component: ProjectelectronicsComponent},
{path:'projectiot', component: ProjectiotComponent},
{path:'projectrobotics', component: ProjectroboticsComponent},
{path: 'workshop', component: WorkshopComponent},
{path:'kidzone', component: KidzoneComponent},
// {path:'admin', component: AdminComponent},
//{path:'adminlogin', component:AdminloginComponent},
{path:'adminpanel',component: Adminpanel2Component},
{path:'admindashboard', component: AdmindashboardComponent},
{path:'adminpanellogin', component: AdminpanelloginComponent},
{path:'adminpanelregister', component: AdminpanelregisterComponent},
{path:'adminpanelforgotpw', component: AdminpanelforgotpwComponent},
{path:'adminlearners', component: AdminlearnersComponent},
{path:'adminmentors', component: AdminmentorsComponent},
{path:'admincourses', component: AdmincoursesComponent},
{path:'adminprojects', component: AdminprojectsComponent},
{path:'adminworkshop', component: AdminworkshopComponent},
{path:'adminkidzone', component: AdminkidzoneComponent},
{path:'courseandroidappfees', component: CourseandroidappfeesComponent},
{path:'coursewebdevfees', component: CoursewebdevfeesComponent},
{path:'coursemlfees', component: CoursemlfeesComponent},
{path:'projectiotfees', component: ProjectiotfeesComponent},
{path:'projectelectronicsfees', component: ProjectelectronicsfeesComponent},
{path:'projectroboticsfees', component: ProjectroboticsfeesComponent},
{path:'workshopfees', component: WorkshopfeesComponent},
{path:'kidzonefees', component: KidzonefeesComponent},
{path:'mentors', component: MentorsComponent},
{path:'mentorlogin', component: UserComponent},
{path:'roboiotdashboard', component: RoboiotdashboardComponent},
{path:'roboiotlearners', component: RoboiotlearnersComponent},
{path:'roboiotmentor', component: RoboiotmentorComponent},
{path:'roboiotmentorpanel', component: RoboiotmentorpanelComponent},
{path:'webandroiddashboard', component: WebandroiddashboardComponent},
{path:'webandroidlearners',component: WebandroidlearnersComponent},
{path:'webandroidmentor', component: WebandroidmentorComponent},
{path:'webandroidmentorpanel', component: WebandroidmentorpanelComponent},
{path:'mllearners',component: MllearnersComponent},
{path:'mlmentor', component:MlmentorComponent},
{path:'mlmentordashboard', component: MlmentordashboardComponent},
{path:'mlmentorpanel', component: MlmentorpanelComponent},
{path:'eelearners', component: EelearnersComponent},
{path:'eementor', component: EementorComponent},
{path:'eementordashboard', component: EementordashboardComponent},
{path:'eementorpanel', component:EementorpanelComponent},
{path:'learners',component: LearnersComponent},
{path:'coursewebdevlearner', component: CoursewebdevlearnerComponent },
{path:'courseandroidlearner', component: CourseandroidlearnerComponent},
{path:'coursemllearner', component: CoursemllearnerComponent},
{path:'projectiotlearner', component: ProjectiotlearnerComponent},
{path:'projectelectronicslearner', component: ProjectelectronicslearnerComponent },
{path:'projectroboticslearner', component: ProjectroboticslearnerComponent},
{path:'workshoplearner', component: WorkshoplearnerComponent},
{path:'kidzonelearner', component: KidzonelearnerComponent},
{path:'adminlogin2', component: Adminlogin2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
