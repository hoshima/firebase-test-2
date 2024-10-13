import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-test-2-d97f8',
        appId: '1:95858383166:web:44bc3c87a600396077b46f',
        storageBucket: 'fir-test-2-d97f8.appspot.com',
        apiKey: 'AIzaSyAlhdCDDP5-0Ribo1r_Daitkqxw3Pox0WA',
        authDomain: 'fir-test-2-d97f8.firebaseapp.com',
        messagingSenderId: '95858383166',
      })
    ),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
  ],
};
