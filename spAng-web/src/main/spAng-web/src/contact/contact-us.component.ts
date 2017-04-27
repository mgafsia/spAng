import {Component} from "@angular/core";
import {NgForm} from '@angular/forms';
import {ContactService} from "./contact.service";

@Component({
  moduleId: module.id,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  service: string;
  subject: string;
  message: string;

  constructor(private _contactService: ContactService) {
  }

  submitMyMessage(mgaForm: NgForm) {
    this._contactService.sendSupportMessage(mgaForm.value);
  }
}
