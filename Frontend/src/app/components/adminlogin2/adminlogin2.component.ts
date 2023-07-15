import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-adminlogin2',
  templateUrl: './adminlogin2.component.html',
  styleUrls: ['./adminlogin2.component.css']
})
export class Adminlogin2Component {
  username = 'Admin'
    password = ''
    invalidLogin = false

  constructor(private router:Router, public loginservice: AuthService, private ls:InsertService) { }

checkAdminLogin() {
  if (this.loginservice.authenticate(this.username, this.password)) 
  {
    this.router.navigate(['admindashboard'])

    this.invalidLogin = false
  } 
  else
  {
    this.invalidLogin = true
    alert("Wrong Credentials");
    this.router.navigate(['adminlogin2'])
  }

}
loginData(logindata:any){
  this.ls.loginservice2(logindata.value).subscribe();
}
}

