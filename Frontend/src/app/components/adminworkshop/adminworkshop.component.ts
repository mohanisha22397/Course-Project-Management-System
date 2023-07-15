import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-adminworkshop',
  templateUrl: './adminworkshop.component.html',
  styleUrls: ['./adminworkshop.component.css']
})
export class AdminworkshopComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addWorkshop(insert.value).subscribe();
    alert('You Have successfully added workshop');
    window.location.reload();
  }

  
  deleteLoginpage(data:any){
    this.ps.deleteWorkshop(data.value).subscribe();
    alert('You Have successfully deleted workshop');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewWorkshop().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
 
    div1:boolean=false;
    div2:boolean=false;
    div3:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false;
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false;
    }
  
    div4Function(){
      this.div2=false;
      this.div1=false;
      this.div3=false;
  }

}
