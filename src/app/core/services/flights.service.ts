import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from 'src/app/model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) { }

  getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
    .pipe(map(response => response.map(flight => this.assingKey(flight))));
  }

  getFlight(key: string): Observable<Flight>{
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map( flight => this.assingKey(flight)));
    
  }

  editFlight(key: string, flight: Flight){
    return this.db.object<Flight>(`${this.API_URL}/${key}`).update(flight);
  }

  removeFlight(key: string){
    return this.db.object<Flight>(`${this.API_URL}/${key}`).remove();
  }


  addFlights(flight: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flight);
  }
  
  private assingKey(flight) {
    return {...flight.payload.val(), key: flight.key }
  }
}
