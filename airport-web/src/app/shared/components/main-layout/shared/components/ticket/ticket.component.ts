import { Component } from '@angular/core';
import {Ticket} from "../../interfaces/ticket";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  constructor(
    private http: HttpClient
  ) { }

  bought(id: number) {
    const userId = localStorage.getItem('auth-id');
    console.log(userId)
    this.http.put<Ticket>("https://localhost:7096/api/Ticket/updateuser",{id, userId} )
      .subscribe(() => {

      })
  }
}
