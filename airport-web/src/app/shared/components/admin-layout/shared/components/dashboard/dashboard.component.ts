import { Component } from '@angular/core';
import {AuthService} from "../../../../login-layout/shared/services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../employee/shared/interfaces/User";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  form: FormGroup;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      role: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      lastName:  new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    })
  }

  createEmployee() {
    if (this.form.invalid) {
      return;
    }

    const newUser: User = {
      login: this.form.value.login,
      password: this.form.value.password,
      role: this.form.value.role,
      name: this.form.value.name,
      lastName:  this.form.value.lastName
    }
    console.log(newUser)
    this.http.post("https://localhost:7096/api/User/create", newUser)
      .subscribe(data => console.log(data));
  }
}
