import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HikeListComponent} from "./hike-list.compenent";
import {HikeService} from "./hike.service";
import {RouterModule, ActivatedRoute} from "@angular/router";
import {HikeDetailsComponent} from "./hike-details.component";
import {FormsModule} from "@angular/forms";
import {HikeFilterPipe} from "../pipe/hike-filter.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
  imports : [ CommonModule,
              BrowserModule,
              RouterModule,
              FormsModule
            ],
  declarations : [HikeListComponent,
                  HikeDetailsComponent,
                  HikeFilterPipe],
  providers : [HikeService]
})
export class HikeModule {
}
