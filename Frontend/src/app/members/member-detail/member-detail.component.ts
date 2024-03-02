import {Component, OnInit} from '@angular/core';
import {Member} from "../../_models/member";
import {MembersService} from "../../_services/members.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent implements  OnInit{
  member: Member | undefined;
  constructor(private memberService: MembersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadMember();
    console.log(this.member);
  }

  loadMember() {
    let userName = this.route.snapshot.paramMap.get('username');
    console.log( this.route.snapshot.paramMap);
    if(!userName) {
      return;
    }
    this.memberService.getMember(userName).subscribe({
      next: member => this.member = member
    })
  }

}
