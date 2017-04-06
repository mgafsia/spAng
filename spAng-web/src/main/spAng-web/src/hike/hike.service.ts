import {Injectable} from "@angular/core";
import {Hike} from "./Hike";


@Injectable()
export class HikeService {
  hikes : Hike[] = [{
                  name:"hikeOne",
                  length: 1,
                  evaluation: [2, 3]
                   },
                  {
                    name:"hikeTwo",
                    length: 3.5,
                    evaluation: [8, 7]
                  }];

  public getHikes() {
    return this.hikes;
  }
}
