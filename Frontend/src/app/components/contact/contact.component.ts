import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router:Router){}
submitContactMsg(){
  alert("Thank you for getting in touch with us. We would surely try to contact you soon.");
  this.router.navigate([''])
}
}
