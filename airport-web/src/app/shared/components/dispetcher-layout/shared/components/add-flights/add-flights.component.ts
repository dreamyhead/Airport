import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../admin-layout/shared/components/employee/shared/interfaces/User";
import {Flight} from "../../../../main-layout/shared/interfaces/flight";
import {Airplane} from "../../../../admin-layout/shared/components/airplane/shared/interfaces/airplane";

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.scss']
})
export class AddFlightsComponent {
  form: FormGroup;
  airplanes: Airplane[];
  selectedAirplaneId: number;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      startpoint: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      endpoint: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      startdate: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      enddate: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      airplane:  new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });

    this.http.get<Airplane[]>("https://localhost:7096/api/Airplane/get")
      .subscribe(data => {
        console.log(data)
        this.airplanes = data.filter((item)=> {
          return item.isBusy === false
        })
        console.log(this.airplanes)
      })
  }

  createEmployee() {
    if (this.form.invalid) {
      return;
    }

    const newFlight: Flight = {
      startPoint: this.form.value.startpoint,
      endPoint: this.form.value.endpoint,
      startDate: this.form.value.startdate,
      endDate: this.form.value.enddate,

      airplaneId:  this.selectedAirplaneId
    }
    console.log(newFlight)
    this.http.post("https://localhost:7096/api/Flight/create", newFlight)
      .subscribe(data => console.log(data));
  }
}
