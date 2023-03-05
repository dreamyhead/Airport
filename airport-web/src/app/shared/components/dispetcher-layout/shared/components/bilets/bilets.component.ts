import { Component } from '@angular/core';
import {Airplane} from "../../../../admin-layout/shared/components/airplane/shared/interfaces/airplane";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../../../../main-layout/shared/interfaces/ticket";

@Component({
  selector: 'app-bilets',
  templateUrl: './bilets.component.html',
  styleUrls: ['./bilets.component.scss']
})
export class BiletsComponent {
  bilets: Ticket[];
  displayedColumns: string[] = ['id', 'numberOfFlight', 'numberOfPlace', 'price', 'flight-start', 'flight-end', 'flight-startdate', 'flight-enddate', 'user-name',  'button-group'];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Ticket[]>("https://localhost:7096/api/Ticket/getall")
      .subscribe(data => {
        this.bilets = data
      })
  }

  updateBusy(id: number) {
    this.http.get<Ticket>("https://localhost:7096/api/Ticket/updateticket?id="+ id)
      .subscribe(() => {
        this.http.get<Ticket[]>("https://localhost:7096/api/Ticket/getall")
          .subscribe(data => {
            this.bilets = data
          })
      })
  }

}
