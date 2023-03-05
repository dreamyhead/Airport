import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Flight} from "../../../../main-layout/shared/interfaces/flight";
import { Ticket } from 'src/app/shared/components/main-layout/shared/interfaces/ticket';

@Component({
  selector: 'app-add-bilets',
  templateUrl: './add-bilets.component.html',
  styleUrls: ['./add-bilets.component.scss']
})
export class AddBiletsComponent {
  form: FormGroup;
  flights: Flight[];
  selectedFlightId: number;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      numberOfPlace: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      flight: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });

    this.http.get<Flight[]>("https://localhost:7096/api/Flight/get")
      .subscribe(data => {
        console.log(data)
        this.flights = data
        console.log(this.flights)
      })
  }

  createEmployee() {
    if (this.form.invalid) {
      return;
    }

    const newTicket: Ticket = {
      numberOfPlace: this.form.value.numberOfPlace,
      price: this.form.value.price,
      flightId:  this.selectedFlightId
    }
    console.log(newTicket)
    this.http.post("https://localhost:7096/api/Ticket/create", newTicket)
      .subscribe(data => console.log(data));
  }
}
