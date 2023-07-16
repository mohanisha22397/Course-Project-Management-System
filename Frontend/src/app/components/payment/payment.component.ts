import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private is:InsertService,private router:Router) {

  }

 insertdetails1(insert:any){
   this.is.addMemFees(insert.value).subscribe();
   alert('You Have successfully paid your fees');
   window.location.reload();
 }
}
