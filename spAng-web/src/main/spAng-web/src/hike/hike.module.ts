import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HikeListComponent} from "./hike-list.compenent";
import {HikeService} from "./hike.service";
import {RouterModule, ActivatedRoute} from "@angular/router";
import {HikeDetailsComponent} from "./hike-details.component";

@NgModule({
  imports : [ BrowserModule,
              RouterModule
            ],
  declarations : [HikeListComponent, HikeDetailsComponent],
  providers : [HikeService]
})
export class HikeModule {
}
