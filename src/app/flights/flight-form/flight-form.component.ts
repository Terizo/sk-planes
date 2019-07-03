import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    { label: 'Stwardess', value: 'stwaradess'},
    { label: 'Senior Cabin Cew', value: 'senior_cabin_crew'},
    { label: 'Pilot', value: 'pilot'},
    { label: 'Co-Pilot', value: 'co_pilot'},
    { label: 'Mechanic', value: 'mechanic'},
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  get crew() {
    return this.form.get('crew') as FormArray;
  }
  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember(){
    this.crew.push(this.buildCrewMember());
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: ''
    });
  }

    private buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required] ],
      departureTime: ['',[Validators.required] ],
      returnTime: ['', [Validators.required] ],
      code: ['SK', [Validators.required, Validators.minLength(4), Validators.maxLength(7)] ],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
  })
  }

}
