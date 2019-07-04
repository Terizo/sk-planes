import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let FlightsService = class FlightsService {
    constructor(db) {
        this.db = db;
        this.API_URL = '/flights';
    }
    getFlights() {
        return this.db.list(this.API_URL).snapshotChanges()
            .pipe(map(response => response.map(flight => this.assingKey(flight))));
    }
    getFlight(key) {
        return this.db.object(`${this.API_URL}/${key}`).snapshotChanges()
            .pipe(map(flight => this.assingKey(flight)));
    }
    editFlight(key, flight) {
        return this.db.object(`${this.API_URL}/${key}`).update(flight);
    }
    removeFlight(key) {
        return this.db.object(`${this.API_URL}/${key}`).remove();
    }
    addFlights(flight) {
        return this.db.list(this.API_URL).push(flight);
    }
    assingKey(flight) {
        return Object.assign({}, flight.payload.val(), { key: flight.key });
    }
};
FlightsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FlightsService);
export { FlightsService };
//# sourceMappingURL=flights.service.js.map