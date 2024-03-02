import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {provideToastr, ToastrModule} from 'ngx-toastr';
import { routes } from './app.routes';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {errorInterceptor} from "./_interceptors/error.interceptor";
import {jwtInterceptor} from "./_interceptors/jwt.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    BrowserAnimationsModule,
    provideToastr(),
    provideAnimations(),
      provideHttpClient(withInterceptors([errorInterceptor,jwtInterceptor])),
    importProvidersFrom(
        BsDropdownModule.forRoot(),
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right'
        })
    )]
};
