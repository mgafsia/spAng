import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HikeListComponent} from "./hike-list.compenent";
import {HikeService} from "./hike.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports : [BrowserModule, RouterModule],
  declarations : [HikeListComponent],
  providers : [HikeService]
})
export class HikeModule {
}
