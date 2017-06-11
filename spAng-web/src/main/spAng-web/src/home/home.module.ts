import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {ContactUsComponent} from "../contact/contact-us.component";


@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactUsComponent},
    ])],
  providers: []
})
export class HomeModule {

}
