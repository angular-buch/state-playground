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
    this.state = {
      ...this.state,
      counter: this.state.counter + 1
    };

    this.state$.next(this.state);
  }


  dispatch(message: string) {
    switch (message) {
      case 'INCREMENT': return this.incrementCounter();
    }
  }
}
