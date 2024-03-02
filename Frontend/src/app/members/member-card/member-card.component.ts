import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Member} from "../../_models/member";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class MemberCardComponent implements OnInit{
  @Input() member: Member | undefined;

  constructor() {
  }

  ngOnInit() {

  }


}
