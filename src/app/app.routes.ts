import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { AboutMe } from './about-me/about-me';
import { Settings } from './settings/settings';
import { UserSettings } from './settings/user-settings/user-settings';
import { AppearanceSettings } from './settings/appearance-settings/appearance-settings';
import { NetworkSettings } from './settings/network-settings/network-settings';

export const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'settings',
    component: Settings,
    children: [
      { path: 'user-settings', component: UserSettings },
      { path: 'appearance-settings', component: AppearanceSettings },
      { path: 'network-settings', component: NetworkSettings },
    ],
  },
  { path: 'portfolio', component: Portfolio },
  { path: 'about-me', component: AboutMe },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
