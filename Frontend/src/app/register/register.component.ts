import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AccountService} from "../_services/account.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  model: any ={};
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService: AccountService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  register() {
   this.accountService.register(this.model).subscribe({
     next: () => {
       this.cancel();
     },
     error: error => this.toastr.error(error.error)
   })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
