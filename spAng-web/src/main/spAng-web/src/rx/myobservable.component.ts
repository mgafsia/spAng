import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';


@Component({
  selector: 'app-obsval',
  templateUrl: 'myobservable.component.html'
})
export class MyObservableComponent {
    _intStream: [number] = [1, 2, 3, 4, 5];
    myObservable$: Observable<number>;

    createObservable() {
      this.myObservable$ =  Observable.create((observer: any) => {
        for ( const i of this._intStream ) {
          observer.next(i);
          if ( i > 3 ) {
            observer.error('not allowed !!');
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

    createObservable2() {
      const observable$ = Observable.from(this._intStream);
      const observor = observable$.subscribe(
        (val) => console.log(val),
        (err) => console.error(err),
        () => console.log('complete !')
      );
    }
}
