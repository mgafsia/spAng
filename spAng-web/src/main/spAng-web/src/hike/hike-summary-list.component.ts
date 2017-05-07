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
  
  constructor(private _hikeService: HikeService) {    
  }
    
  ngOnInit() {
    this._hikeService.getHikesFormApi()
                    .subscribe(hikes => this.hikes = hikes,
                              err => this.errorMessage = err);
        
  }  
}
