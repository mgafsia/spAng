import {Pipe, PipeTransform} from "@angular/core";
import {Hike} from "../hike/Hike";


@Pipe({
  name : "hikeFilter"
})
export class HikeFilterPipe implements PipeTransform {

  transform(input: Hike[], searchTerm: string = '') {
     if(searchTerm !== '') {
       return  input.filter((hike: Hike) => hike.description.toLowerCase().includes(searchTerm) ||
                                    hike.name.toLowerCase().includes(searchTerm) );
     } else {
       return input;
     }
  }

}
