import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmentors',
  templateUrl: './adminmentors.component.html',
  styleUrls: ['./adminmentors.component.css']
})
export class AdminmentorsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 roboiot(){
    this.router.navigateByUrl("/roboiotmentor");
  }
  ee(){
    this.router.navigateByUrl("/eementor");
  }
  ml(){
    this.router.navigateByUrl("/mlmentor");
  }
  webandroid(){
    this.router.navigateByUrl("/webandroidmentor");
  }

}
