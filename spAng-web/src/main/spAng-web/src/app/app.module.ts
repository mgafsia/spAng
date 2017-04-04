import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HikeModule } from "../hike/hike.module";
import {HikeListComponent} from "../hike/hike-list.compenent";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HikeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   appModuleVar = 'just for test';

}
