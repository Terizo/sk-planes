import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlightsModule } from './flights/flights.module';
import { environment } from '../environments/environment.prod';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditFlightComponent } from './flights/edit-flight/edit-flight.component';
@NgModule({
  declarations: [
    AppComponent,
    EditFlightComponent
  ],
  imports: [

  BrowserModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FlightsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
