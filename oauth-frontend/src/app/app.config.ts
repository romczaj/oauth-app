import {ApplicationConfig} from "@angular/platform-browser";

import {provideRouter} from "@angular/router";
import {provideAnimations} from "@angular/platform-browser/animations";
import {BackendApiService} from "./backend-api/backend-api.service";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideZoneChangeDetection} from "@angular/core";
import {routes} from "./app.routes";
import {authConfig} from './auth/auth.config';
import {AuthInterceptor, provideAuth} from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    BackendApiService,
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideAuth(authConfig),
  ],
};
