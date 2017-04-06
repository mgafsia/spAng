import {Component} from "@angular/core";
import {Hike} from "./Hike";

@Component({
  selector: 'mga-hike-list',
  templateUrl: 'hike-list.component.html'
})

export class HikeListComponent {
  hikes : Hike[];
}
