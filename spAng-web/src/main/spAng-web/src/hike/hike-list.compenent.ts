import {Component} from "@angular/core";

@Component({
  selector: 'mga-hike-list',
  templateUrl: 'hike-list.component.html'
})

export class HikeListComponent {
  public hikeListComponentTitle : string = 'Hike Component Title';
  public static aStaticVarInHikeListComponent : string = 'a static var';
}
