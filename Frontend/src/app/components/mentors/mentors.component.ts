import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { InsertService } from 'src/app/insert.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements  OnInit{
  msg:String="";
  faculty: UserComponent= new UserComponent();

  constructor(private router:Router,private ls:InsertService,private authService:AuthService) { }

  ngOnInit(): void {}

  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;
 
  div1Function(){
      this.div1=true;
      this.div2=false;
      this.div3=false;
      this.div4=false;
  }

  div2Function(){
      this.div2=true;
      this.div1=false;
      this.div3=false;
      this.div4=false;
  }

  div3Function(){
      this.div3=true;
      this.div2=false;
      this.div1=false;
      this.div4=false;
  }

  div4Function(){
    this.div3=false;
    this.div2=false;
    this.div1=false;
    this.div4=true;
}
//   div4Function(){
//     this.div2=false;
//     this.div1=false;
//     this.div3=false;
// }

  goToFaculty1(mentorpanel:String){
    this.router.navigate(['${roboiotmentorpanel}']);
  }

  loginData1(logindata:any){
    this.ls.loginservice3RoboIOT(logindata.value).subscribe();
  }

  loginFaculty1(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemoteRoboIOT(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/roboiotmentorpanel');
      },
      _error=>{
        this.msg='Please recheck your password and email id';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  goToFaculty2(eementorpanel:String){
    this.router.navigate(['${eementorpanel}']);
  }

  loginData2(logindata:any){
    this.ls.loginservice3EE(logindata.value).subscribe();
  }

  loginFaculty2(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemoteEE(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/eementorpanel');
      },
      _error=>{
        this.msg='Please recheck your password and email id';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  goToFaculty3(mlmentorpanel:String){
    this.router.navigate(['${mlmentorpanel}']);
  }

  loginData3(logindata:any){
    this.ls.loginservice3ML(logindata.value).subscribe();
  }

  loginFaculty3(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemoteML(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/mlmentorpanel');
      },
      _error=>{
        this.msg='Please recheck your password and email id';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }


  goToFaculty4(webandroidmentorpanel:String){
    this.router.navigate(['${webandroidmentorpanel}']);
  }
  loginData4(logindata:any){
    this.ls.loginservice3WebAndroid(logindata.value).subscribe();
  }
  loginFaculty4(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemoteWebAndroid(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/webandroidmentorpanel');
      },
      _error=>{
        this.msg='Please recheck your password and email id';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }



}

