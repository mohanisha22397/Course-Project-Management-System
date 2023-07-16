import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthService } from 'src/app/auth.service';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css']
})
export class LearnersComponent implements OnInit {

  //email: String="";
 // password: String ="";

  msg:String="";
  user: UserComponent= new UserComponent();

  constructor(private router:Router,private ls:InsertService,private authService:AuthService) { }
  
  ngOnInit(): void {
    //this.email="";
    //this.password="";
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
  goToPage(registermain:String){
    //this.router.navigate(['${about}']);
    this.router.navigateByUrl('/registermain');
  }


  goToUser1(webdevlearnerpanel:String){
    this.router.navigate(['${webdevlearnerpanel}']);
  }

  loginData1(logindata:any){
    this.ls.loginservice1WebDev(logindata.value).subscribe();
  }

  loginUser1(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteWebDev(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/webdevlearnerpanel');
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

  
  goToUser2(androidlearnerpanel:String){
    this.router.navigate(['${androidlearnerpanel}']);
  }

  loginData2(logindata:any){
    this.ls.loginservice1Android(logindata.value).subscribe();
  }

  loginUser2(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteAndroid(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/androidlearnerpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }


  goToUser3(mllearnerpanel:String){
    this.router.navigate(['${mllearnerpanel}']);
  }

  loginData3(logindata:any){
    this.ls.loginservice1ML(logindata.value).subscribe();
  }

  loginUser3(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteML(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/mllearnerpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }


  div4:boolean=false;
  div5:boolean=false;
  div6:boolean=false;
 
  div4Function(){
      this.div4=true;
      this.div5=false;
      this.div6=false;
  }

  div5Function(){
      this.div5=true;
      this.div6=false;
      this.div4=false;
  }

  div6Function(){
      this.div6=true;
      this.div5=false;
      this.div4=false;
  }
  // goToPage4(registermain:String){
  //   //this.router.navigate(['${about}']);
  //   this.router.navigateByUrl('/register-main');
  // }


  goToUser4(robolearnerpanel:String){
    this.router.navigate(['${robolearnerpanel}']);
  }

  loginData4(logindata:any){
    this.ls.loginservice1Robotics(logindata.value).subscribe();
  }

  loginUser4(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteRobotics(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/robolearnerpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  
  goToUser5(eleclearnerpanel:String){
    this.router.navigate(['${eleclearnerpanel}']);
  }

  loginData5(logindata:any){
    this.ls.loginservice1Android(logindata.value).subscribe();
  }

  loginUser5(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteAndroid(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/androidlearnerpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }


  goToUser6(iotlearnerpanel:String){
    this.router.navigate(['${iotlearnerpanel}']);
  }

  loginData6(logindata:any){
    this.ls.loginservice1IOT(logindata.value).subscribe();
  }

  loginUser6(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteIOT(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/iotlearnerpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  div7:boolean=false;
  div8:boolean=false;
  
  div7Function(){
      this.div7=true;
  }

  div8Function(){
      this.div8=true;
  }

  // goToPage(registermain:String){
  //   //this.router.navigate(['${about}']);
  //   this.router.navigateByUrl('/registermain');
  // }


  goToUser7(workshop:String){
    this.router.navigate(['${workshop}']);
  }

  loginData7(logindata:any){
    this.ls.loginservice1IOT(logindata.value).subscribe();
  }

  loginUser7(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteWorkshop(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/workshop');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }
  goToUser8(kidzone:String){
    this.router.navigate(['${kidzone}']);
  }

  loginData8(logindata:any){
    this.ls.loginservice1IOT(logindata.value).subscribe();
  }

  loginUser8(){
    console.log(this.user)
    this.ls.loginLearnerFromRemoteKidZone(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successful");
        this.router.navigateByUrl('/kidzone');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }
}
