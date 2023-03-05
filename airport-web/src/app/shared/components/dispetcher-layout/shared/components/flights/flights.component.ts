import { Component } from '@angular/core';
import {Airplane} from "../../../../admin-layout/shared/components/airplane/shared/interfaces/airplane";
import {HttpClient} from "@angular/common/http";
import {Flight} from "../../../../main-layout/shared/interfaces/flight";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  flights: Flight[];
  displayedColumns: string[] = ['id', 'startPoint', 'endPoint', 'startDate','endDate','airplane', 'button-group'];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Flight[]>("https://localhost:7096/api/Flight/get")
      .subscribe(data => {
        this.flights = data
      })
  }

  // updateBusy(id: number) {
  //   this.http.get<Flight>("https://localhost:7096/api/Flight/updatebusy?id="+ id)
  //     .subscribe(() => {
  //       this.http.get<Flight[]>("https://localhost:7096/api/Airplane/get")
  //         .subscribe(data => this.flights = data)
  //     })
  // }
}
