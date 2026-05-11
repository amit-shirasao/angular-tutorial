import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { AboutMe } from './about-me/about-me';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'about-me', component: AboutMe },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
