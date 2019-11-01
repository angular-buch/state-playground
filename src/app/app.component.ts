import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from './state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  counter$ = this.service.state$.pipe(
    map(state => state.counter)
  );

  constructor(public service: StateService) {}


  increment() {
    this.service.dispatch('INCREMENT');
  }

  decrement() {
    this.service.dispatch('DECREMENT');
  }

  reset() {
    this.service.dispatch('RESET');
  }
}
