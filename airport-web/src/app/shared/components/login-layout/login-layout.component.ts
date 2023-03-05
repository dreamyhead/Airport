import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { LoginUser } from './shared/interfaces/LoginUser';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit{
  hide = true;
  form: FormGroup;
  submitted: boolean;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
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
    })
  }

  submit() {

    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const user: LoginUser = {
      login: this.form.value.login,
      password: this.form.value.password
    }

    this.auth.login(user)
      .subscribe(() => {
        this.form.reset();
        this.submitted = false
        if (localStorage.getItem('auth-role') === "admin" ) {
          this.router.navigate(['/admin','dashboard']);
        }
        if (localStorage.getItem('auth-role') === "dispetcher" ) {
          this.router.navigate(['/dispetcher', 'flights']);
        }
        if (localStorage.getItem('auth-role') === "user" ) {
          this.router.navigate(['/main']);
        }
      });

    this.submitted = false
  }
}
