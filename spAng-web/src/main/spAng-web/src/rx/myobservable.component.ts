import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import {MyObservor} from "./myobserver";

@Component({
  selector: 'mga-obsval',
  templateUrl: 'myobservable.component.html'
})
export class MyObservableComponent {
    _intStream: [number] = [1,2,3,4,5];
    myObservable$: Observable<number>;

    createObservable() {
      this.myObservable$ = Observable.from(this._intStream);
      this.myObservable$.subscribe(new MyObservor());

    }


}
