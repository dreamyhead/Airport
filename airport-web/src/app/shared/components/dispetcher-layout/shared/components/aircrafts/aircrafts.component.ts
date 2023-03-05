import { Component } from '@angular/core';
import {Airplane} from "../../../../admin-layout/shared/components/airplane/shared/interfaces/airplane";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.scss']
})
export class AircraftsComponent {
  airplanes: Airplane[];
  displayedColumns: string[] = ['id', 'name', 'numberPlaces', 'isBusy', 'button-group'];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Airplane[]>("https://localhost:7096/api/Airplane/get")
      .subscribe(data => {
        this.airplanes = data
      })
  }

  updateBusy(id: number) {
    this.http.get<Airplane>("https://localhost:7096/api/Airplane/updatebusy?id="+ id)
      .subscribe(() => {
        this.http.get<Airplane[]>("https://localhost:7096/api/Airplane/get")
          .subscribe(data => this.airplanes = data)
      })
  }

}
