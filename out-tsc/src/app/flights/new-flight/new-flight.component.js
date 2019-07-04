import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
let NewFlightComponent = class NewFlightComponent {
    constructor(flightsService, toast, dialogRef) {
        this.flightsService = flightsService;
        this.toast = toast;
        this.dialogRef = dialogRef;
    }
    createFlight() {
        console.log(this.flightForm);
        this.flightsService.addFlights(this.flightForm.form.value)
            .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
    }
    onCreatingSuccess() {
        this.dialogRef.close();
        this.toast.open('Flight has heen successfully created!', '', { panelClass: 'toast-success' });
    }
    onCreatingFailure(error) {
        this.toast.open(error.message, '', { panelClass: 'toast-error' });
    }
};
tslib_1.__decorate([
    ViewChild('flightForm', { static: true })
], NewFlightComponent.prototype, "flightForm", void 0);
NewFlightComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-flight',
        templateUrl: './new-flight.component.html',
        styleUrls: ['./new-flight.component.scss']
    })
], NewFlightComponent);
export { NewFlightComponent };
//# sourceMappingURL=new-flight.component.js.map