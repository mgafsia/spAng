import { Component } from '@angular/core';
import {HikeService} from "../hike/hike.service";
import {Hike} from "../hike/Hike";
import {HikeListComponent} from "../hike/hike-list.compenent";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor() {
  }

}
