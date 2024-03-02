import {Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;

  constructor() {
  }

  ngOnInit(){
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }



  cancelRegisterMode(event: boolean) {
    console.log(event);
    this.registerMode = event;
  }

}
