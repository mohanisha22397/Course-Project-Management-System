import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlearners',
  templateUrl: './adminlearners.component.html',
  styleUrls: ['./adminlearners.component.css']
})
export class AdminlearnersComponent implements OnInit {
  
  constructor(private router:Router) {}

    
  ngOnInit(): void {
  }

  webdev(){
    this.router.navigateByUrl("/coursewebdevlearner");
  }
  android(){
    this.router.navigateByUrl("/courseandroidlearner");
  }
  ml(){
    this.router.navigateByUrl("/coursemllearner");
  }

  robo(){
    this.router.navigateByUrl("/projectroboticslearner");
  }
  elec(){
    this.router.navigateByUrl("/projectelectronicslearner");
  }
  iot(){
    this.router.navigateByUrl("/projectiotlearner");
  }

  workshop(){
    this.router.navigateByUrl("/workshoplearner");
  }
  kidzone(){
    this.router.navigateByUrl("/kidzonelearner");
  }
  // ce(){
  //   this.router.navigateByUrl("/cestudents");
  // }

}
