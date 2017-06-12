import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BrowserModule} from "@angular/platform-browser";
import {MapModule} from "../map/map.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule,
    MapModule],
  providers: []
})
export class HomeModule {
}
