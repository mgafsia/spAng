import {OnInit, Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Hike} from "./Hike";
import {HikeService} from "./hike.service";

@Component({
    moduleId: module.id,
    templateUrl: "hike-details.component.html"
})
export class HikeDetailsComponent implements OnInit {
  id: number;
  hike: Hike;
  title: string;

  errorMessage: string = "";

  constructor(private _activatedRouter: ActivatedRoute,
              private _hikeService: HikeService,
              private _router: Router) {
      this.hike = new Hike();
  }

  ngOnInit() {
      this.id = +this._activatedRouter.snapshot.params['id'];
      this._hikeService.getHikeFromId(this.id)
        .subscribe(hike => {
            this.hike = hike;
          },
           err => this.errorMessage = err
        );
      this.title = `Details of the hike id : ${this.id}`;
      console.log("after reading hike form id ");
  }

   mgaGoBack() {
    console.log('go back to list <==');
    this._router.navigate(['/hikes']);
  }
}
