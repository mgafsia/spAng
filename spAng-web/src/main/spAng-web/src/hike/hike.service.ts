import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class HikeService {
  private url: string = 'src/api/hikes.json';

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
}
