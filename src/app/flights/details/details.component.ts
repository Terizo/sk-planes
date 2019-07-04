import { Component, Inject } from '@angular/core';
import { Flight } from './../../model/flight.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{
  flight: Flight;
  constructor(
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight

  ) { 
    this.flight = data;
  }

  close(){
    this.dialogRef.close();
  }

}
