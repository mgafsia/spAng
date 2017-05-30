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
      this.myObservable$ =  Observable.create((observer: any) => {
        for(let i of this._intStream) {
          observer.next(i);
          if(i > 3) {
            observer.error("not allowed !!");
          }
        }
        observer.complete();
      });

      this.myObservable$.subscribe(
        val => console.log(`- val is : ${val}`),
        err => console.error(`- err is : ${err}`),
        ()  => console.log(`end !`)
      );
    }
}
