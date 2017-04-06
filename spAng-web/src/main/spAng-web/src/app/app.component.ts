import { Component } from '@angular/core';
import {HikeService} from "../hike/hike.service";
import {Hike} from "../hike/Hike";
import {HikeListComponent} from "../hike/hike-list.compenent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "-";
  hikes: Hike[];
  hikeListComponent: HikeListComponent;

  constructor(private _hikeService: HikeService) {
  }

  ngOnInit() {
    this.hikes = this._hikeService.getHikes();
    this.hikeListComponent = new HikeListComponent(this._hikeService);
    console.log(this.hikes);
    console.log(this.hikeListComponent);
    //TODO(MGA) : check the video. ngFor in ?
  }
}
