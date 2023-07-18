import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-projectroboticsfees',
  templateUrl: './projectroboticsfees.component.html',
  styleUrls: ['./projectroboticsfees.component.css']
})
export class ProjectroboticsfeesComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private is:InsertService,private router:Router){

  }
  insertdetails(insert:any){
    this.is.addFees(insert.value).subscribe();
    alert('You Have successfully paid your fees');
    window.location.reload();
  }
}