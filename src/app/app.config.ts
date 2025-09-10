import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BookOutline, QuestionCircleOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { routes } from './app.routes';
import { provideNzIcons } from 'ng-zorro-antd/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideNzIcons([BookOutline, QuestionCircleOutline, UserOutline]),
  ],
};
