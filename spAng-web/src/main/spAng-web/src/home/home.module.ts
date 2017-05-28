import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BrowserModule} from "@angular/platform-browser";
import {MyObservableModule} from "../rx/myoberserbvable.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, MyObservableModule],
  providers: []
})
export class HomeModule {

}
