import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class HikeService {
  private url: string = '/api/hikes';

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this.getHikesFormApi();
  }

  public getHikesFormApi() {
    return  this._http.get(this.url)
                      .do( hike => console.log(hike))
                      .map( hikes => hikes.json());

  }

  public getHikeFromId(id: number) {
    return this._http.get(this.url + '/' + id ) //TODO(MGA) : change this
      .do(hike => console.log(id + '==>' + hike ))
      .map(hike => hike.json());
  }

}
