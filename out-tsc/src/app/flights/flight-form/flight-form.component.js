import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
let FlightFormComponent = class FlightFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.jobs = [
            { label: 'Stwardess', value: 'stwaradess' },
            { label: 'Senior Cabin Cew', value: 'senior_cabin_crew' },
            { label: 'Pilot', value: 'pilot' },
            { label: 'Co-Pilot', value: 'co_pilot' },
            { label: 'Mechanic', value: 'mechanic' },
        ];
        this.editMode = false;
    }
    ngOnInit() {
        this.buildForm();
    }
    setFlight(flight) {
        const { key } = flight, formData = tslib_1.__rest(flight, ["key"]);
        this.form.patchValue(formData);
        formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
    }
    get crew() {
        return this.form.get('crew');
    }
    removeCrewMember(i) {
        this.crew.removeAt(i);
    }
    addCrewMember(crewMember) {
        this.crew.push(this.buildCrewMember(crewMember));
    }
    buildCrewMember(crewMember = {}) {
        return this.formBuilder.group({
            name: crewMember.name || '',
            job: crewMember.job || ''
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            origin: ['', [Validators.required]],
            destination: ['', [Validators.required]],
            departureTime: ['', [Validators.required]],
            returnTime: ['', [Validators.required]],
            code: ['SK', [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
            additionalInformation: '',
            withSKPlanesDiscount: false,
            crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
        });
    }
};
tslib_1.__decorate([
    Input()
], FlightFormComponent.prototype, "editMode", void 0);
FlightFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-flight-form',
        templateUrl: './flight-form.component.html',
        styleUrls: ['./flight-form.component.scss']
    })
], FlightFormComponent);
export { FlightFormComponent };
//# sourceMappingURL=flight-form.component.js.map