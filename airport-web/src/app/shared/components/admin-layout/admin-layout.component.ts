import { Component } from '@angular/core';
import {AuthService} from "../login-layout/shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  airplane() {
    this.router.navigate(['/admin/airplane'])
  }
  employee() {
    this.router.navigate(['/admin/employee'])
  }
  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}
