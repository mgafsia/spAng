import {OnInit, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Hike} from "./Hike";
import {HikeService} from "./hike.service";

@Component({
    moduleId: module.id,
    templateUrl: "hike-details.component.html"
})
export class HikeDetailsComponent implements OnInit {
  id: number;
  hike: Hike;
  name: string ="";

  errorMessage: string = "";

  constructor(private _activatedRouter: ActivatedRoute,
              private _hikeService: HikeService) {
      this.hike = new Hike();
  }

  ngOnInit() {
      this.id = this._activatedRouter.snapshot.params['id'];
      this._hikeService.getHikeFromId(this.id)
        .subscribe(hike => {
            this.name = hike.name;
            this.hike = hike;
          },
           err => this.errorMessage = err
        );
      console.log("after reading hike form id ");
    //TODO(MGA) : add err
  }
}
