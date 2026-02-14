import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy, withPreloading, PreloadAllModules, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from "@angular/platform-browser/animations";

import { routes } from './app.routes';
import { AppTitleStrategy } from './core/utils/appleTitle.strategy';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    { provide: TitleStrategy, useClass: AppTitleStrategy },
    provideHttpClient(withInterceptors([apiInterceptor, errorInterceptor])),
    provideAnimations(),
  ],
};