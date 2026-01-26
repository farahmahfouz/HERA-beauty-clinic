import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy, withPreloading, PreloadAllModules } from '@angular/router';

import { routes } from './app.routes';
import { AppTitleStrategy } from './core/utils/appleTitle.strategy';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withPreloading(PreloadAllModules)),
  { provide: TitleStrategy, useClass: AppTitleStrategy }, 
  ],

};
