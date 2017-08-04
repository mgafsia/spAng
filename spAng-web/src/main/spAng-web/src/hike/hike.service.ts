import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Hike} from "./Hike";


@Injectable()
export class HikeService implements OnInit{
  private url: string = '/api/hikes';
  private filePath: string = '../../db/hikes.json';

  constructor(private _http: Http) {
  }

  ngOnInit() {
  }

  public getHikesFormApi() {
    return  this._http.get(this.url)
                      .do(hikes => console.log('getHikesFromApi : ' + hikes.json()))
                      .map( hikes => hikes.json());

  }

  public getHikesFormJsonFile() {
    return  this._http.get(this.filePath)
      .do(hikes => console.log('getHikesFormJsonFile : ' + hikes.json()))
      .map( hikes => hikes.json());

  }

  public getHikeFromId(id: number) {  //TODO(MGA) : do the same form JSON file
     return this._http.get(this.url + '/' + id ) //TODO(MGA) : change this
      .do(hike => console.log(id + '==>' + hike ))
      .map(hike => hike.json());
  }
}
