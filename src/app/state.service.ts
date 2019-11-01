import { Injectable } from '@angular/core';

export interface MyState {
  counter: number;
  anotherProperty: string;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: MyState = {
    counter: 0,
    anotherProperty: 'foobar'
  };

  incrementCounter() {
    this.state.counter++;
  }
}
