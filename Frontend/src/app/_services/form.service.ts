import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _isDirty  = new BehaviorSubject<boolean>(false);

  set isDirty(value: boolean) {
    this._isDirty.next(value);
  }

  get isDirty$() {
    return this._isDirty.asObservable();
  }
}
