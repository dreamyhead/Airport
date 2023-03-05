import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./shared/components/admin-layout/admin-layout.component";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {LoginLayoutComponent} from "./shared/components/login-layout/login-layout.component";
import {DashboardComponent} from "./shared/components/admin-layout/shared/components/dashboard/dashboard.component";
import {EmployeeComponent} from "./shared/components/admin-layout/shared/components/employee/employee.component";
import {AirplaneComponent} from "./shared/components/admin-layout/shared/components/airplane/airplane.component";
import {DispetcherLayoutComponent} from "./shared/components/dispetcher-layout/dispetcher-layout.component";
import {FlightsComponent} from "./shared/components/dispetcher-layout/shared/components/flights/flights.component";
import {
  AircraftsComponent
} from "./shared/components/dispetcher-layout/shared/components/aircrafts/aircrafts.component";
import {BiletsComponent} from "./shared/components/dispetcher-layout/shared/components/bilets/bilets.component";
import {
  AddFlightsComponent
} from "./shared/components/dispetcher-layout/shared/components/add-flights/add-flights.component";
import {
  AddBiletsComponent
} from "./shared/components/dispetcher-layout/shared/components/add-bilets/add-bilets.component";

const routes: Routes = [
  { path: 'main',  component: MainLayoutComponent },
  { path: 'login', component: LoginLayoutComponent },
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'airplane', component: AirplaneComponent },
    ]
  },
  {
    path: 'dispetcher', component: DispetcherLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'flights', component: FlightsComponent },
      { path: 'tickets', component: BiletsComponent },
      { path: 'airplanes', component: AircraftsComponent },
      { path: 'add-flights', component: AddFlightsComponent },
      { path: 'add-bilets', component: AddBiletsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
