import { Hike } from './Hike';
import { Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'mga-sum',
  templateUrl: 'hike-summary-details.component.html'
})
export class HikeSummaryDetailsComponent implements OnInit {
  @Input() hike: Hike;    
  
  ngOnInit() {
    console.log("on start hike : " + this.hike);
    console.log("on start hike name : " + this.hike.description);
  }
}