import {Component} from "@angular/core";
import {Hike} from "./Hike";
import {HikeService} from "./hike.service";

@Component({
  moduleId: module.id,
  selector: 'mga-hike-list',
  templateUrl: 'hike-list.component.html'
})
export class HikeListComponent {
  hikes : Hike[];

  constructor(private _hikeService: HikeService) {
  }

  ngOnInit() {
    this.hikes = this._hikeService.getHikes();
  }
}

