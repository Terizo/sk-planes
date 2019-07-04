import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FlightsService } from './../../core/services/flights.service';
import { ActivatedRoute } from '@angular/router';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';
import { Flight } from './../../model/flight.model';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent  {
  @ViewChild('flightForm', { static: true }) flightForm: FlightFormComponent;
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) { }

  ngAfterViewInit(){
    this.loadFlight();
  }

  private loadFlight(){
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight))).subscribe(flight => this.flight = flight);
  }

}
