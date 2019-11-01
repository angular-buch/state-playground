import { Component } from '@angular/core';
import { StateService } from './state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter$ = this.service.state$.pipe(
    map(state => state.counter)
  );

  constructor(public service: StateService) {}
}
