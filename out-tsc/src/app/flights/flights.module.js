import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from './../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
let FlightsModule = class FlightsModule {
};
FlightsModule = tslib_1.__decorate([
    NgModule({
        declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent, DetailsComponent, EditFlightComponent],
        imports: [
            CommonModule,
            MaterialModule,
            FormsModule,
            ReactiveFormsModule
        ],
        entryComponents: [NewFlightComponent, DetailsComponent],
        exports: [FlightsComponent]
    })
], FlightsModule);
export { FlightsModule };
//# sourceMappingURL=flights.module.js.map