import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HikeModule } from "../hike/hike.module";
import {HikeListComponent} from "../hike/hike-list.compenent";
import {RouterModule} from "@angular/router";
import {PageNotFound} from "../page-not-found";
import {HomeComponent} from "../home/home.component";
import {HomeModule} from "../home/home.module";
import {HikeDetailsComponent} from "../hike/hike-details.component";
import {ContactModule} from "../contact/contact.module";
import {ContactUsComponent} from "../contact/contact-us.component";
import {HikeSummaryListComponent} from "../hike/hike-summary-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HikeModule,
    HomeModule,
    ContactModule,
    RouterModule.forRoot([

      { path: 'home', component : HomeComponent},
      { path: 'hikes', component: HikeListComponent},
      { path: "hikes/:id", component: HikeDetailsComponent},
      { path: "hikesSummary", component: HikeSummaryListComponent},
      { path: "contact", component: ContactUsComponent},
      { path: '', component: HomeComponent},
      { path: '**', component: PageNotFound}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
