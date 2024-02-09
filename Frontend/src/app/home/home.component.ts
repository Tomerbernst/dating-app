import {Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "../register/register.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => {}
    });
  }

  cancelRegisterMode(event: boolean) {
    console.log(event);
    this.registerMode = event;
  }

}
