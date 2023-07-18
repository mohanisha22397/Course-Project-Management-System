import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-projectelectronicsfees',
  templateUrl: './projectelectronicsfees.component.html',
  styleUrls: ['./projectelectronicsfees.component.css']
})
export class ProjectelectronicsfeesComponent implements OnInit{
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
