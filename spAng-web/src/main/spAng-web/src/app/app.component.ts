import { Component } from '@angular/core';
import {HikeListComponent} from "../hike/hike-list.compenent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  : string;
  private _hikeListComponent : HikeListComponent;
  title3 : string = HikeListComponent.aStaticVarInHikeListComponent;

  constructor() {
    this.title = 'TitleInConstructor';
    //this._hikeListComponent = new HikeListComponent;
  }
}
