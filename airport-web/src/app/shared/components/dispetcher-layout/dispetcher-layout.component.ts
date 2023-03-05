import { Component } from '@angular/core';
import {AuthService} from "../login-layout/shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dispetcher-layout',
  templateUrl: './dispetcher-layout.component.html',
  styleUrls: ['./dispetcher-layout.component.scss']
})
export class DispetcherLayoutComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  addbilets() {
    this.router.navigate(['/dispetcher/add-bilets'])
  }
  addflights() {
    this.router.navigate(['/dispetcher/add-flights'])
  }
  flights() {
    this.router.navigate(['/dispetcher/flights'])
  }
  airplane() {
    this.router.navigate(['/dispetcher/airplanes'])
  }
  employee() {
    this.router.navigate(['/dispetcher/tickets'])
  }
  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}
