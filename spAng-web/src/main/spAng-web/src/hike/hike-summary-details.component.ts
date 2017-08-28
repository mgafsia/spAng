import { Hike } from './Hike';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'mga-sum',
  templateUrl: 'hike-summary-details.component.html'
})
export class HikeSummaryDetailsComponent implements OnInit {
  @Input() hike: Hike;
  @Output() addToToDoListEvent = new EventEmitter<Hike>();

  ngOnInit() {
    console.log("on start hike : " + this.hike);
    console.log("on start hike name : " + this.hike.description);
  }

  addHikeToToDoList(checked: any) {
    console.log(checked);
    if(checked)
      this.addToToDoListEvent.emit(this.hike);
  }

  changeDataSource() {
    console.log("change data source ...");
  }

}
