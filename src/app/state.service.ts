import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { startWith, scan, shareReplay } from 'rxjs/operators';

export interface MyState {
  counter: number;
  anotherProperty: string;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private initialState: MyState = {
    counter: 0,
    anotherProperty: 'foobar'
  };

  private messages$ = new Subject<string>();
  state$ = this.messages$.pipe(
    startWith('INIT'),
    scan(this.calculateState, this.initialState),
    shareReplay(1)
  );

  dispatch(message: string) {
    this.messages$.next(message);
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
