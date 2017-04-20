import {Component} from "@angular/core";
import {NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  service: string;
  sujet: string;
  message: string;

  submitMyMessage(mgaForm: NgForm) {
    console.log(mgaForm);
    //console.log(`name : ${mgaSubject}`);
  }
}
