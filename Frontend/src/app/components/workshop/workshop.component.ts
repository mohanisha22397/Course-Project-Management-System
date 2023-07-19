import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {
onSubmit(){
  alert("Hello, there!,We have received your submission requesting a workshop at your organisation.Looking forward for this association. We'll get in touch with you soon.")
}
}
