import {Injectable} from "@angular/core";
import {Hike} from "./Hike";


@Injectable()
export class HikeService {
  hikes : Hike[] = [{ name:"hikeOne", description: "The first hike",  length: 1,   evaluation: [2, 3]},
                    { name:"hikeTwo", description: "The second hike",  length: 6,   evaluation: [9, 7, 9]}];

  public getHikes() {
    return this.hikes;
  }
}
