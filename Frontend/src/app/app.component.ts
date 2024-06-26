import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {AccountService} from "./_services/account.service";
import {IUser} from "./_models/user";
import {HomeComponent} from "./home/home.component";
import {NgxSpinnerModule} from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HomeComponent, NgxSpinnerModule],
  providers:[AccountService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'dating-app';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user: IUser = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
