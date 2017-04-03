import {NgModule} from "@angular/core";
import {HikeComponent} from "./hike.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations : [HikeComponent],
  imports : [BrowserModule],
  bootstrap : [HikeModule]
})
export class HikeModule {
  firstString = 'First message';
}
