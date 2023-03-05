import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "./shared/interfaces/ticket";
import {AuthService} from "../login-layout/shared/services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  tickets: Ticket[] = [];
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      startpoint: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      endpoint: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
    })
  }

  submit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return
    }

    const points: any = {
      startPoint: this.form.value.startpoint,
      endPoint: this.form.value.endpoint
    }
    console.log(this.form.value.startpoint);
    this.http.get<Ticket[]>("https://localhost:7096/api/Ticket/get?startPoint=" + points.startPoint + "&endPoint=" + points.endPoint)
      .subscribe(responce => {
        this.tickets = responce.filter((item) => {
          return item.isBusy === false
        });
      })
  }
  bought(id: any) {
    const userId = localStorage.getItem('auth-id');
    console.log(userId)

    this.http.get<Ticket>("https://localhost:7096/api/Ticket/updateuser?id=" + id + "&userId=" + userId)
      .subscribe(() => {

      })
  }
  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}
