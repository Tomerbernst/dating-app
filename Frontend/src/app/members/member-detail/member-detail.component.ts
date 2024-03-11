import {Component, OnInit} from '@angular/core';
import {Member} from "../../_models/member";
import {MembersService} from "../../_services/members.service";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {TabsModule} from "ngx-bootstrap/tabs";
import {GalleryItem, GalleryModule, ImageItem} from "ng-gallery";
@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, TabsModule, GalleryModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent implements  OnInit{
  member: Member | undefined;
  images: GalleryItem[] = [];
  constructor(private memberService: MembersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    let userName = this.route.snapshot.paramMap.get('username');
    console.log(this.route.snapshot.paramMap);

    if (!userName) {
      return;
    }
    this.memberService.getMember(userName).subscribe({
      next: (member) => {
        this.member = member;
          this.getImages();
      },
      error: (error) => {
        console.error('Error loading member', error);
      },
      complete: () => {
        console.log('Member loading complete', this.member);
      }
    });
  }

  getImages() {
    if(!this.member) return;
    for (const photo of this.member?.photos) {
      this.images.push(new ImageItem({src: photo.url, thumb: photo.url}));
    }
  }


}
