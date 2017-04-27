import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ContactUsComponent} from "./contact-us.component";
import {FormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";


@NgModule({
  imports: [CommonModule,
            BrowserModule,
            FormsModule
           ],  //Needed modules
  declarations: [ContactUsComponent],  //Component of module
  providers: [ContactService],  //services
})
export class ContactModule {

}
