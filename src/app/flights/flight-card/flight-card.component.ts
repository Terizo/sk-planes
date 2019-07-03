import { Component, Input } from '@angular/core';
import { Flight } from './../../model/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {
  @Input () flight: Flight;

}
