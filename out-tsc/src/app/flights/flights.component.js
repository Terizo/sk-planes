import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { DetailsComponent } from './details/details.component';
let FlightsComponent = class FlightsComponent {
    constructor(dialog, flightsService) {
        this.dialog = dialog;
        this.flightsService = flightsService;
        this.flights$ = this.flightsService.getFlights();
    }
    openNewFlightModal() {
        this.dialog.open(NewFlightComponent);
    }
    showDetails(flight) {
        this.dialog.open(DetailsComponent, { data: flight });
    }
};
FlightsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-flights',
        templateUrl: './flights.component.html',
        styleUrls: ['./flights.component.scss']
    })
], FlightsComponent);
export { FlightsComponent };
//# sourceMappingURL=flights.component.js.map