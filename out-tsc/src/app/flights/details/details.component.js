import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let DetailsComponent = class DetailsComponent {
    constructor(router, dialogRef, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.flight = data;
    }
    gotToEditFlight() {
        this.close();
        this.router.navigate(['dashboard/flights', this.flight.key]);
    }
    close() {
        this.dialogRef.close();
    }
};
DetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-details',
        templateUrl: './details.component.html',
        styleUrls: ['./details.component.scss']
    }),
    tslib_1.__param(2, Inject(MAT_DIALOG_DATA))
], DetailsComponent);
export { DetailsComponent };
//# sourceMappingURL=details.component.js.map