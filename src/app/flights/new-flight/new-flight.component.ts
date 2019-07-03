import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { FlightsService } from './../../core/services/flights.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent{
  @ViewChild('flightForm', { static: true }) flightForm: FlightFormComponent;

  constructor(
    private flightsService: FlightsService,
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }

    createFlight() {
      console.log(this.flightForm);
      this.flightsService.addFlights(this.flightForm.form.value)
        .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this))
    }

    private onCreatingSuccess() {
      this.dialogRef.close();
    }

    private onCreatingFailure() {
      console.log('some error');
    }

}
