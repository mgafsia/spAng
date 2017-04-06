import { Component } from '@angular/core';
import {HikeService} from "../hike/hike.service";
import {Hike} from "../hike/Hike";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "-";
  hikes  : Hike[];

  constructor(private _hikeService: HikeService) {
  }

  ngOnInit() {
    this.hikes = this._hikeService.getHikes();
    console.log(this.hikes);
  }
}
