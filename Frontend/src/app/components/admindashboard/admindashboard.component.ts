import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  learners(){
    this.router.navigateByUrl("/adminlearners");
  }

  faculties(){
    this.router.navigateByUrl("/adminmentors");
  }

  // staff(){
  //   this.router.navigateByUrl("/adminstaff");
  // }

  courses(){
    this.router.navigateByUrl("/admincourses");
  }
  projects(){
    this.router.navigateByUrl("/adminprojects");
  }
  workshop(){
    this.router.navigateByUrl("/adminworkshop");
  }
  kidzone(){
    this.router.navigateByUrl("/adminkidzone");
  }

}



