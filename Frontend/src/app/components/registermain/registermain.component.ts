import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-registermain',
  templateUrl: './registermain.component.html',
  styleUrls: ['./registermain.component.css']
})
export class RegistermainComponent {
  constructor(private is:InsertService,private router:Router){}

  ngOnInit(): void {
  }
  
//Courses
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
  
  insertdetails1(insert:any){
    this.is.addWebDevLearner(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click1();
  }
  click1(){
    this.router.navigateByUrl("/learners");
   
  }

  insertdetails2(insert:any){
    this.is.addAndroidLearner(insert.value).subscribe();
    alert("Your are successfully signed up");
    this.click2();
  }
  click2(){
    this.router.navigateByUrl("/learners");
   
  }

  insertdetails3(insert:any){
    this.is.addMLLearner(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click3();
  }
  click3(){
    this.router.navigateByUrl("/learners");
   
  }

    // Project
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
    this.div4=false;
    this.div6=false;
}

div6Function(){
    this.div6=true;
    this.div5=false;
    this.div4=false;
}

insertdetails4(insert:any){
this.is.addRoboLearner(insert.value).subscribe();
alert("Your are successfully signUp");
this.click1();
}
click4(){
this.router.navigateByUrl("/learners");

}

insertdetails5(insert:any){
this.is.addElecLearner(insert.value).subscribe();
alert("Your are successfully signed up");
this.click5();
}
click5(){
this.router.navigateByUrl("/learners");

}

insertdetails6(insert:any){
this.is.addIOTLearner(insert.value).subscribe();
alert("Your are successfully signUp");
this.click6();
}
click6(){
this.router.navigateByUrl("/learners");

}


//Workshop
div7:boolean=false;
div7Function(){
  this.div7=true;
}
insertdetails7(insert:any){
  this.is.addWSLearner(insert.value).subscribe();
  alert("Your are successfully signUp");
  this.click7();
  }
  click7(){
  this.router.navigateByUrl("/learners");
  
  }

 //Kidzone
 div8:boolean=false;
div8Function(){
  this.div8=true;
}
insertdetails8(insert:any){
  this.is.addWSLearner(insert.value).subscribe();
  alert("Your are successfully signUp");
  this.click8();
  }
  click8(){
  this.router.navigateByUrl("/learners");
  
  } 
}
