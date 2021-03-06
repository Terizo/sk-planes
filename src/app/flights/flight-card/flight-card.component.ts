import { Component, Input, ChangeDetectionStrategy  } from '@angular/core';
import { Flight } from './../../model/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent {
  @Input () flight: Flight;
  math = Math;
}
