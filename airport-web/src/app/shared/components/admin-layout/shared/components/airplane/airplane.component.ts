import { Component } from '@angular/core';
import {User} from "../employee/shared/interfaces/User";
import {HttpClient} from "@angular/common/http";
import {Airplane} from "./shared/interfaces/airplane";

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.scss']
})
export class AirplaneComponent {
  airplanes: Airplane[];
  displayedColumns: string[] = ['id', 'name', 'numberPlaces', 'isBusy', 'isBought', 'isDecommissioned','button-group'];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Airplane[]>("https://localhost:7096/api/Airplane/get")
      .subscribe(data => this.airplanes = data)
  }

  updateBought(id: number) {
    this.http.get<Airplane>("https://localhost:7096/api/Airplane/updatebought?id="+ id)
      .subscribe(() => {
        this.http.get<Airplane[]>("https://localhost:7096/api/Airplane/get")
          .subscribe(data => this.airplanes = data)
      })
  }

  updateDecommissioned(id: number) {
    this.http.get<Airplane>("https://localhost:7096/api/Airplane/updatedec?id=" + id)
      .subscribe(() => {
        this.http.get<Airplane[]>("https://localhost:7096/api/Airplane/get")
          .subscribe(data => this.airplanes = data)
      })
  }
}
