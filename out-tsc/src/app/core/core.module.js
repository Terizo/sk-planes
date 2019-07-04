import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    NgModule({
        declarations: [DashboardComponent, LoginComponent],
        imports: [
            CommonModule,
            MaterialModule,
            RouterModule
        ],
        exports: [DashboardComponent, LoginComponent]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map