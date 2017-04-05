import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HikeListComponent} from "./hike-list.compenent";
import {HikeService} from "./hike.service";

@NgModule({
  imports : [BrowserModule],
  declarations : [HikeListComponent],
  providers : [HikeService]
})
export class HikeModule {
}
