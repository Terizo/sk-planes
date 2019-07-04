import { Component, Inject } from '@angular/core';
import { Flight } from './../../model/flight.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{
  flight: Flight;
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight

  ) { 
    this.flight = data;
  }

  gotToEditFlight() {
    this.close();
    this.router.navigate(['dashboard/flights', this.flight.key]);
  }

  close(){
    this.dialogRef.close();
  }

}
