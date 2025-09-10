import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '',
    component: Layout,
    children: [
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
