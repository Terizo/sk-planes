import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { tap } from 'rxjs/operators';
let EditFlightComponent = class EditFlightComponent {
    constructor(route, toast, router, flightsService) {
        this.route = route;
        this.toast = toast;
        this.router = router;
        this.flightsService = flightsService;
    }
    ngAfterViewInit() {
        this.loadFlight();
    }
    removeFlight() {
        this.flightsService.removeFlight(this.flight.key)
            .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
    }
    editFlight() {
        this.flightsService.editFlight(this.flight.key, this.flightForm.form.value)
            .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
    }
    onEditSuccess() {
        this.router.navigate(['/dashboard']);
        this.toast.open('Flight has been successfuylly edited', '', { panelClass: 'toast-success' });
    }
    onRemoveSuccess() {
        this.router.navigate(['/dashboard']);
        this.toast.open('Flight has been successfuylly removed', '', { panelClass: 'toast-success' });
    }
    onFailure(error) {
        this.toast.open(error.message, '', { panelClass: 'toast-success' });
    }
    loadFlight() {
        const key = this.route.snapshot.params['key'];
        this.flightsService.getFlight(key)
            .pipe(tap(flight => this.flightForm.setFlight(flight))).subscribe(flight => this.flight = flight);
    }
};
tslib_1.__decorate([
    ViewChild('flightForm', { static: true })
], EditFlightComponent.prototype, "flightForm", void 0);
EditFlightComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit-flight',
        templateUrl: './edit-flight.component.html',
        styleUrls: ['./edit-flight.component.scss']
    })
], EditFlightComponent);
export { EditFlightComponent };
//# sourceMappingURL=edit-flight.component.js.map