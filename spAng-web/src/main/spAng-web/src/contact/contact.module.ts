import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ContactUsComponent} from "./contact-us.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [CommonModule,
            BrowserModule,
            FormsModule
           ],  //Needed modules
  declarations: [ContactUsComponent],  //Component of module
  //provides: [],  //services
})
export class ContactModule {

}
