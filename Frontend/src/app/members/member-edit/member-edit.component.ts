import { Component,OnInit, ViewChild, HostListener } from '@angular/core';
import {Member} from "../../_models/member";
import {IUser} from "../../_models/user";
import {AccountService} from "../../_services/account.service";
import {MembersService} from "../../_services/members.service";
import {take} from "rxjs";
import {CommonModule} from "@angular/common";
import {TabsModule} from "ngx-bootstrap/tabs";
import {FormsModule, NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import  {FormService} from '../../_services/form.service'
@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [CommonModule, TabsModule, FormsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.scss'
})
export class MemberEditComponent implements OnInit  {
  member: Member | undefined;
  user: IUser | null = null;
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload',['$event']) unloadNotification($event: any) {
    if(this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private accountService: AccountService, private memberService: MembersService, private toaster: ToastrService, private formService: FormService  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    })
  }

  ngOnInit() {
    this.loadMember();
  }

  onFormChange() {
    this.formService.isDirty = !!this.editForm?.dirty;
  }

  loadMember() {
    if(!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    })
  }

  updateMember() {
    console.log(this.editForm?.value);
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: _=> {
        this.toaster.success("Profile updated successfully");
        this.editForm?.reset(this.member);
      }
    });

  }

}
