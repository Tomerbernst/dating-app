import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Member} from "../_models/member";
import {map, of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    if (this.members.length > 0) {
      return of(this.members);
    } else {
      return this.http.get<Member[]>(this.baseUrl + 'user').pipe(
          map(members => {
            this.members = members;
            return members;
          })
      );
    }
  }

  getMember(userName: string) {
    const member = this.members.find(x => x.userName === userName);
    if (member) return of(member);
    return this.http.get<Member>(this.baseUrl + 'user/' + userName);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'user', member).pipe(
        map(() => {
          const index = this.members.indexOf(member);
          this.members[index] = {...this.members[index], ...member}
        })
    );
  }


}
