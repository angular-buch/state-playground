import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MyState {
  counter: number;
  anotherProperty: string;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: MyState = {
    counter: 0,
    anotherProperty: 'foobar'
  };

  state$ = new BehaviorSubject<MyState>(this.state);

  incrementCounter() {
    this.state.counter++;
    this.state$.next(this.state);
  }
}
