import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "./shared/interfaces/User";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  users: User[];
  displayedColumns: string[] = ['id', 'name', 'lastname', 'role', 'button-group'];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<User[]>("https://localhost:7096/api/User/get")
      .subscribe(data => this.users = data)
  }

  deleteUser(id: number) {
    this.http.delete("https://localhost:7096/api/User/delete?id=" + id)
      .subscribe(data => {
        this.http.get<User[]>("https://localhost:7096/api/User/get")
          .subscribe(data => this.users = data)
      })
  }
}
