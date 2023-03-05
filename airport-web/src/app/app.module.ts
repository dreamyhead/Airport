import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { LoginLayoutComponent } from './shared/components/login-layout/login-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from "@angular/material/card";
import { TicketComponent } from './shared/components/main-layout/shared/components/ticket/ticket.component';
import { AuthService } from './shared/components/login-layout/shared/services/auth.service';
import { DashboardComponent } from './shared/components/admin-layout/shared/components/dashboard/dashboard.component';
import { EmployeeComponent } from './shared/components/admin-layout/shared/components/employee/employee.component';
import { AirplaneComponent } from './shared/components/admin-layout/shared/components/airplane/airplane.component';
import { DispetcherLayoutComponent } from './shared/components/dispetcher-layout/dispetcher-layout.component';
import { FlightsComponent } from './shared/components/dispetcher-layout/shared/components/flights/flights.component';
import { AircraftsComponent } from './shared/components/dispetcher-layout/shared/components/aircrafts/aircrafts.component';
import { BiletsComponent } from './shared/components/dispetcher-layout/shared/components/bilets/bilets.component';
import { AddFlightsComponent } from './shared/components/dispetcher-layout/shared/components/add-flights/add-flights.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AddBiletsComponent } from './shared/components/dispetcher-layout/shared/components/add-bilets/add-bilets.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    TicketComponent,
    DashboardComponent,
    EmployeeComponent,
    AirplaneComponent,
    DispetcherLayoutComponent,
    FlightsComponent,
    AircraftsComponent,
    BiletsComponent,
    AddFlightsComponent,
    AddBiletsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
