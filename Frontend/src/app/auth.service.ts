import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authenticate(username: string, password: string){
    if(username === "Admin" && password ==="admin1234")
   {
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }
    }

    isUserLoggedIn(){
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return (!(user === null))
    }
    logOut(){
      sessionStorage.removeItem('username')
    }

    authenticate1(email: string, password: string){
      if(email === "abc@xyz.com" && password ==="abc1234")
     {
        sessionStorage.setItem('email',email)
        return true;
      }
      else{
        return false;
      }
      }
  
      isUserLoggedIn1(){
        let user1 = sessionStorage.getItem('email')
        console.log(!(user1 === null))
        return (!(user1 === null))
      }
      logOut1(){
        sessionStorage.removeItem('email')
      }
}

