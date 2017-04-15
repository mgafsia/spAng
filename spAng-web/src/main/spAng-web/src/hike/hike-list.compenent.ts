import {Component, OnInit} from "@angular/core";
import {Hike} from "./Hike";
import {HikeService} from "./hike.service";

@Component({
  moduleId: module.id,
  selector: 'mga-hike-list',
  templateUrl: 'hike-list.component.html'
})
export class HikeListComponent implements OnInit {
  hikes: Hike[];
  errorMessage: string = "";
  searchTerm: string;

  constructor(private _hikeService: HikeService) {
  }
  ngOnInit() {
    this._hikeService.getHikesFormApi()
      .subscribe(hikes => {
                            this.hikes = hikes;
                            this.getCssRowClass(this.hikes);
                          },
                 err => this.errorMessage = err);
  }

  getCssRowClass(hikes: Hike[]) {
     for (let hike of hikes) {
       if(hike.id % 2) hike.cssClass = "info";
       else hike.cssClass = "warning";
     }
  }
}

