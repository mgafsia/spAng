import { Hike } from './Hike';
import { HikeService } from './hike.service';
import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'hike-summary-list.component.html'
})
export class HikeSummaryListComponent implements OnInit {
  hikes: Hike[];
  errorMessage: String;
  //searchTemplate: string;

  constructor(private _hikeService: HikeService) {
  }

  ngOnInit() {
    this._hikeService.getHikesFormJsonFile()
                    .subscribe(hikes => { this.hikes = hikes ; console.log(this.hikes); },
                              err => this.errorMessage = err);

  }

  hikeToDoList(hike: Hike) {
    console.log(hike.name + "will be added to todo list.")
  }

  changeDataSource() {
    console.log("Change the data source ...");
  }
}
