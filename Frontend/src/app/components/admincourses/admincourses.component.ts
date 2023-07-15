import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-admincourses',
  templateUrl: './admincourses.component.html',
  styleUrls: ['./admincourses.component.css']
})
export class AdmincoursesComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addCourse(insert.value).subscribe();
    alert('You have successfully added a course');
    window.location.reload();
  }

  
  deletedetails(data:any){
    this.ps.deleteCourse(data.value).subscribe();
    alert('You Have successfully deleted a course');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewCourse().subscribe((resp1:any)=>{this.loginpages=resp1;});
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
