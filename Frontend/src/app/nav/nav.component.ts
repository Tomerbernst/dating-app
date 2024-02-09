import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountService} from "../_services/account.service";
import {CommonModule} from "@angular/common";
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  model: any = {};
  constructor(public accountService: AccountService, private route: Router, private toastr: ToastrService) {}

  ngOnInit() {
  }
  login() {
  this.accountService.login(this.model).subscribe({
    next: () => this.route.navigateByUrl('/members')
  })
  }
  logout() {
    this.accountService.logout();
    this.route.navigateByUrl('/');
  }
}
