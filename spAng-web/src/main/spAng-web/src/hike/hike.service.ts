import {Hike} from "./Hike";
import {Injectable} from "@angular/core";


@Injectable()
export class HikeService {
  hikes : Hike[] = [{
           name:"hike1"
           ,length: 1
           //,evaluation: [5,3,7]
           },
           {
           name:"hike2"
           ,length: 3
           //,evaluation: [2,8,7]
           }];
}
