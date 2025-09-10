import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dictionary', pathMatch: 'full' },
      {
        path: 'dictionary',
        loadComponent: () => import('./pages/dictionary/dictionary').then((m) => m.Dictionary),
      },
      {
        path: 'quiz',
        loadComponent: () => import('./pages/quiz/quiz').then((m) => m.Quiz),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
      },
    ],
  },
];
