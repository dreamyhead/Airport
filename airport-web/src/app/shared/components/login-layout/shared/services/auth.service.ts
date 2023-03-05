import { LoginUser } from './../interfaces/LoginUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(user: LoginUser): Observable<any> {
    return this.http.post("https://localhost:7096/api/Login", user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    return this.setToken(null)
  }

  private setToken(responce: any) {
    console.log(responce)
    if (responce) {
      localStorage.setItem('auth-user', responce.value.username)
      localStorage.setItem('auth-id', responce.value.id)
      localStorage.setItem('auth-role', responce.value.role)
    }
    else {
      localStorage.clear()
    }
  }
}
