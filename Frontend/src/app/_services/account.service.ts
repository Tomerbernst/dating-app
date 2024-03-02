import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs';
import {IUser} from "../_models/user";
import { BehaviorSubject } from 'rxjs';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  number:any;
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<IUser>(`${this.baseUrl}account/login`, model).pipe(
      map((response: IUser) => {
        const user = response
        if(user) {
          console.log(2,user);
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
          this.number = user;
          console.log(3, this.number);
        }
      }
    ))
  };
getNumber() {
  console.log(1, this.number);
  return this.number;
}
  register(model: any) {
    return this.http.post<IUser>(`${this.baseUrl}account/register`, model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: IUser) {
    this,this.currentUserSource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
