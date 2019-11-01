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

  dispatch(message: string) {
    this.state = this.calculateState(this.state, message);
    this.state$.next(this.state);
  }

  private calculateState(state: MyState, message: string): MyState {
    switch (message) {
      case 'INCREMENT': {
        return {
          ...state,
          counter: state.counter + 1
        };
      }

      case 'DECREMENT': {
        return {
          ...state,
          counter: state.counter - 1
        };
      }

      case 'RESET': {
        return { ...state, counter: 0 };
      }

      default: return state;
    }
  }
}
