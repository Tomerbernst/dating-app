import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import {FormService} from "../_services/form.service";
import {take, map} from 'rxjs';
export const preventUnsavedChangesGuard: CanActivateFn = (route, state) => {
  const formStateService: any = inject(FormService);
  return formStateService.isDirty$.pipe(
    take(1),
    map(isDirty => {
      if(isDirty) {
        confirm('You have unsaved changes! Are you sure you want to leave?');
      }
    })
  );
};

