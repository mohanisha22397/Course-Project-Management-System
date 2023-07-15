import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }

  url1="http://localhost:8080/insertadmin"
  url2="http://localhost:8080/loginadmin"
  url3="http://localhost:8080/viewadmin"

  url4="http://localhost:8080/addlearner"
  url5="http://localhost:8080/loginlearner"
  url6="http://localhost:8080/viewlearner"
  url7="http://localhost:8080/updatelearner"
  url8="http://localhost:8080/deletelearner"

  url9="http://localhost:8080/addwebdevlearner"
  url10="http://localhost:8080/loginwebdevlearner"
  url11="http://localhost:8080/viewwebdevlearner"
  url12="http://localhost:8080/updatewebdevlearner"
  url13="http://localhost:8080/deletewebdevlearner"

  url14="http://localhost:8080/addandroidlearner"
  url15="http://localhost:8080/loginandroidlearner"
  url16="http://localhost:8080/viewandroidlearner"
  url17="http://localhost:8080/updateandroidlearner"
  url18="http://localhost:8080/deleteandroidlearner"

  url19="http://localhost:8080/addmlearner"
  url20="http://localhost:8080/loginmllearner"
  url21="http://localhost:8080/viewmllearner"
  url22="http://localhost:8080/updatemllearner"
  url23="http://localhost:8080/deletemllearner"

  url24="http://localhost:8080/addrobolearner"
  url25="http://localhost:8080/loginrobolearner"
  url26="http://localhost:8080/viewrobolearner"
  url27="http://localhost:8080/updaterobolearner"
  url28="http://localhost:8080/deleterobolearner"

  url29="http://localhost:8080/addiotearner"
  url30="http://localhost:8080/loginiotlearner"
  url31="http://localhost:8080/viewiotlearner"
  url32="http://localhost:8080/updateiotlearner"
  url33="http://localhost:8080/deleteiotlearner"

  url34="http://localhost:8080/addeleclearner"
  url35="http://localhost:8080/logineleclearner"
  url36="http://localhost:8080/vieweleclearner"
  url37="http://localhost:8080/updateeleclearner"
  url38="http://localhost:8080/deleteeleclearner"

  url39="http://localhost:8080/addcourse"
  url40="http://localhost:8080/viewcourse"
  url41="http://localhost:8080/updatecourse"
  url42="http://localhost:8080/deletecourse"

  url43="http://localhost:8080/addproject"
  url44="http://localhost:8080/viewproject"
  url45="http://localhost:8080/updateproject"
  url46="http://localhost:8080/deleteproject"

  url47="http://localhost:8080/addworkshop"
  url48="http://localhost:8080/viewworkshop"
  url49="http://localhost:8080/updateworkshop"
  url50="http://localhost:8080/deleteworkshop"

  url51="http://localhost:8080/addwslearner"
  url52="http://localhost:8080/loginwslearner"
  url53="http://localhost:8080/viewwslearner"
  url54="http://localhost:8080/updatewslearner"
  url55="http://localhost:8080/deletewslearner"

  url56="http://localhost:8080/addkidzone"
  url57="http://localhost:8080/viewkidzone"
  url58="http://localhost:8080/updatekidzone"
  url59="http://localhost:8080/deletekidzone"

  url60="http://localhost:8080/addkidzonelearner"
  url61="http://localhost:8080/loginkidzonelearner"
  url62="http://localhost:8080/viewkidzonelearner"
  url63="http://localhost:8080/updatekidzonelearner"
  url64="http://localhost:8080/deletekidzonelearner"

  url65="http://localhost:8080/addmemfees"
  url66="http://localhost:8080/viewmemfees"

  url67="http://localhost:8080/addfees"
  url68="http://localhost:8080/viewfees"

  url69="http://localhost:8080/addroboiotfaculty"
  url70="http://localhost:8080/loginroboiotfaculty"
  url71="http://localhost:8080/viewroboiotfaculty"
  url72="http://localhost:8080/updateroboiotfaculty"
  url73="http://localhost:8080/deleteroboiotfaculty"

  url74="http://localhost:8080/addeefaculty"
  url75="http://localhost:8080/logineefaculty"
  url76="http://localhost:8080/vieweefaculty"
  url77="http://localhost:8080/updateeefaculty"
  url78="http://localhost:8080/deleteeefaculty"

  url79="http://localhost:8080/addmlfaculty"
  url80="http://localhost:8080/loginmlfaculty"
  url81="http://localhost:8080/viewmlfaculty"
  url82="http://localhost:8080/updatemlfaculty"
  url83="http://localhost:8080/deletemlfaculty"

  url84="http://localhost:8080/addwebandroidfaculty"
  url85="http://localhost:8080/loginwebandroidfaculty"
  url86="http://localhost:8080/viewwebandroidfaculty"
  url87="http://localhost:8080/updatewebandroidfaculty"
  url88="http://localhost:8080/deletewebandroidfaculty"


  // url67="http://localhost:8080/addwebdevfees"
  // url68="http://localhost:8080/viewwebdevfees"

  // url69="http://localhost:8080/addandroidfees"
  // url70="http://localhost:8080/viewandroidfees"

  // url71="http://localhost:8080/addmlfees"
  // url72="http://localhost:8080/viewmlfees"

  // url73="http://localhost:8080/addrobofees"
  // url74="http://localhost:8080/viewrobofees"

  // url75="http://localhost:8080/addiotfees"
  // url76="http://localhost:8080/viewiotfees"

  // url77="http://localhost:8080/addelecfees"
  // url78="http://localhost:8080/viewelecfees"

  //Admin login
  loginservice2(data3:any){
    return this.http.post(this.url2, data3);
  }

  public loginAdminFromRemote(adminlogin2:UserComponent):Observable<object>{
    console.log(adminlogin2);
    return this.http.post(this.url2,adminlogin2);
  }
  
  //Learner login
  addLearner(data:any){
    return this.http.post(this.url4, data);
  }
  viewLearner(){
    return this.http.get(this.url6);
  }
  updateLearner(value:any){
    return this.http.post(this.url7, value);
  }
  deleteLearner(data:any){
    return this.http.post(this.url8, data);
  }

  login1(data2:any){
    return this.http.post(this.url5, data2);
  }

  public loginLearnerFromRemote(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url5,user);
  }

   //Courses: ADD, VIEW, DELETE
   addCourse(data:any){
    return this.http.post(this.url39, data);
  }
  viewCourse(){
    return this.http.get(this.url40);
  }
  deleteCourse(data:any){
    return this.http.post(this.url42, data);
  }

  //Projects: ADD, VIEW, DELETE
  addProject(data:any){
    return this.http.post(this.url43, data);
    //return this.http.post("http://localhost:8080/addproject", data);
  }
  viewProject(){
    return this.http.get(this.url44);
    //return this.http.get("http://localhost:8080/viewproject");
  }
  deleteProject(data:any){
    return this.http.post(this.url46, data);
  }

  //Workshop: ADD, VIEW, DELETE
  addWorkshop(data:any){
    return this.http.post(this.url47, data);
  }
  viewWorkshop(){
    return this.http.get(this.url48);
  }
  deleteWorkshop(data:any){
    return this.http.post(this.url50, data);
  }


//Kidzone: ADD, VIEW, DELETE
addKidZone(data:any){
  return this.http.post(this.url56, data);
}
viewKidZone(){
  return this.http.get(this.url57);
}
deleteKidZone(data:any){
  return this.http.post(this.url59, data);
}

  //------------------Mentor/faculty--------------
  //Mentor login
  addRoboIOTFaculties(data:any){
    return this.http.post(this.url69, data);
  }
  viewRoboIOTFaculties(){
    return this.http.get(this.url71);
  }
  updateRoboIOTFaculties(value:any){
    return this.http.post(this.url72, value);
  }
  deleteRoboIOTFaculties(data:any){
    return this.http.post(this.url73, data);
  }

  loginservice3RoboIOT(data4:any){
    return this.http.post(this.url70, data4);
  }

  public loginFacultyFromRemoteRoboIOT(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url70,faculty);
    
  }
  
  addEEFaculties(data:any){
    return this.http.post(this.url74, data);
  }
  viewEEFaculties(){
    return this.http.get(this.url76);
  }
  updateEEFaculties(value:any){
    return this.http.post(this.url77, value);
  }
  deleteEEFaculties(data:any){
    return this.http.post(this.url78, data);
  }

  loginservice3EE(data4:any){
    return this.http.post(this.url75, data4);
  }

  public loginFacultyFromRemoteEE(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url75,faculty);
    
  }


  addMLFaculties(data:any){
    return this.http.post(this.url79, data);
  }
  viewMLFaculties(){
    return this.http.get(this.url81);
  }
  updateMLFaculties(value:any){
    return this.http.post(this.url82, value);
  }
  deleteMLFaculties(data:any){
    return this.http.post(this.url83, data);
  }

  loginservice3ML(data4:any){
    return this.http.post(this.url80, data4);
  }

  public loginFacultyFromRemoteML(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url80,faculty);
    
  }

  addWebAndroidFaculties(data:any){
    return this.http.post(this.url84, data);
  }
  viewWebAndroidFaculties(){
    return this.http.get(this.url86);
  }
  updateWebAndroidFaculties(value:any){
    return this.http.post(this.url87, value);
  }
  deleteWebAndroidFaculties(data:any){
    return this.http.post(this.url88, data);
  }

  loginservice3WebAndroid(data4:any){
    return this.http.post(this.url85, data4);
  }

  public loginFacultyFromRemoteWebAndroid(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url85,faculty);
    
  }

  //---------------------------COURSES-------------------------------
  //WebDev login
  addWebDevLearner(data:any){
    return this.http.post(this.url9, data);
  }
  viewWebDevLearner(){
    return this.http.get(this.url11);
  }
  updateWebDevLearner(value:any){
    return this.http.post(this.url12, value);
  }
  deleteWebDevLearner(data:any){
    return this.http.post(this.url13, data);
  }
  loginservice1WebDev(data2:any){
    return this.http.post(this.url10, data2);
  }
  public loginLearnerFromRemoteWebDev(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url10,user);
  }

  //AndroidApp login
  addAndroidLearner(data:any){
    return this.http.post(this.url14, data);
  }
  viewAndroidLearner(){
    return this.http.get(this.url15);
  }
  updateAndroidLearner(value:any){
    return this.http.post(this.url17, value);
  }
  deleteAndroidLearner(data:any){
    return this.http.post(this.url18, data);
  }
  loginservice1Android(data2:any){
    return this.http.post(this.url15, data2);
  }
  public loginLearnerFromRemoteAndroid(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url15,user);  
  }

  //ML login
  addMLLearner(data:any){
    return this.http.post(this.url19, data);
  }
  viewMLLearner(){
    return this.http.get(this.url21);
  }
  updateMLLearner(value:any){
    return this.http.post(this.url22, value);
  }
  deleteMLLearner(data:any){
    return this.http.post(this.url23, data);
  }
  loginservice1ML(data2:any){
    return this.http.post(this.url20, data2);
  }
  public loginLearnerFromRemoteML(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url20,user);   
  }

  //----------------------------PROJECTS-----------------------------------------
  //Robotics login
  addRoboLearner(data:any){
    return this.http.post(this.url24, data);
  }
  viewRoboLearner(){
    return this.http.get(this.url26);
  }
  updateRoboLearner(value:any){
    return this.http.post(this.url27, value);
  }
  deleteRoboLearner(data:any){
    return this.http.post(this.url28, data);
  }
  loginservice1Robotics(data2:any){
    return this.http.post(this.url25, data2);
  }
  public loginLearnerFromRemoteRobotics(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url25,user);   
  }

//IOT Login
  addIOTLearner(data:any){
    return this.http.post(this.url29, data);
  }
  viewIOTLearner(){
    return this.http.get(this.url31);
  }
  updateIOTLearner(value:any){
    return this.http.post(this.url32, value);
  }
  deleteIOTLearner(data:any){
    return this.http.post(this.url33, data);
  }
  loginservice1IOT(data2:any){
    return this.http.post(this.url30, data2);
  }
  public loginLearnerFromRemoteIOT(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url30,user);   
  }

  //Electronics Login
  addElecLearner(data:any){
    return this.http.post(this.url34, data);
  }
  viewElecLearner(){
    return this.http.get(this.url36);
  }
  updateElecLearner(value:any){
    return this.http.post(this.url37, value);
  }
  deleteElecLearner(data:any){
    return this.http.post(this.url38, data);
  }
  loginservice1Elec(data2:any){
    return this.http.post(this.url35, data2);
  }
  public loginLearnerFromRemoteElec(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url35,user);   
  }

  //Workshop Login
  addWSLearner(data:any){
    return this.http.post(this.url51, data);
  }
  viewWSLearner(){
    return this.http.get(this.url53);
  }
  updateWSLearner(value:any){
    return this.http.post(this.url54, value);
  }
  deleteWSLearner(data:any){
    return this.http.post(this.url55, data);
  }
  login1Workshop(data2:any){
    return this.http.post(this.url52, data2);
  }
  public loginLearnerFromRemoteWorkshop(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url52,user);   
  }

  //Kidzone login
  addKidZoneLearner(data:any){
    return this.http.post(this.url60, data);
  }
  viewKidZoneLearner(){
    return this.http.get(this.url62);
  }
  updateKidZoneLearner(value:any){
    return this.http.post(this.url63, value);
  }
  deleteKidZoneLearner(data:any){
    return this.http.post(this.url64, data);
  }
  login1KidZone(data2:any){
    return this.http.post(this.url61, data2);
  }
  public loginLearnerFromRemoteKidZone(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url61,user);   
  }

 

//fees
addFees(data:any){
  return this.http.post(this.url67, data);
}
viewFees(){
  return this.http.get(this.url68);
}

//Membership fees:pricing
  addMemFees(data:any){
    return this.http.post(this.url65, data);
  }
  viewMemFees(){
    return this.http.get(this.url66);
  }

  // addWebDevFees(data:any){
  //   return this.http.post(this.url67, data);
  // }
  // viewWebDevFees(){
  //   return this.http.get(this.url68);
  // }
  // addAndroidFees(data:any){
  //   return this.http.post(this.url69, data);
  // }
  // viewAndroidFees(){
  //   return this.http.get(this.url70);
  // }
  // addMLFees(data:any){
  //   return this.http.post(this.url71, data);
  // }
  // viewMLFees(){
  //   return this.http.get(this.url72);
  // }

  // addRoboFees(data:any){
  //   return this.http.post(this.url73, data);
  // }
  // viewRoboFees(){
  //   return this.http.get(this.url74);
  // }
  // addIOTFees(data:any){
  //   return this.http.post(this.url75, data);
  // }
  // viewIOTFees(){
  //   return this.http.get(this.url76);
  // }
  // addElecFees(data:any){
  //   return this.http.post(this.url77, data);
  // }
  // viewElecFees(){
  //   return this.http.get(this.url78);
  // }

}
