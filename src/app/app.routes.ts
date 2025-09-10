import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dictionary', pathMatch: 'full' },
      //   {
      //     path: 'dictionary',
      //     loadComponent: () => import('./pages/dictionary/dictionary.component')
      //       .then(m => m.DictionaryComponent)
      //   },
      //   {
      //     path: 'quiz',
      //     loadComponent: () => import('./pages/quiz/quiz.component')
      //       .then(m => m.QuizComponent)
      //   },
      //   {
      //     path: 'profile',
      //     loadComponent: () => import('./pages/profile/profile.component')
      //       .then(m => m.ProfileComponent)
      //   }
    ],
  },
];
