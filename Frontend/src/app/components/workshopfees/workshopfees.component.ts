import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-workshopfees',
  templateUrl: './workshopfees.component.html',
  styleUrls: ['./workshopfees.component.css']
})
export class WorkshopfeesComponent implements OnInit{
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
