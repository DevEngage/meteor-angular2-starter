import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProfileComponent } from './profile/profile';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent, terminal: true }, 
  { path: 'profile', component: ProfileComponent },
  // { path: 'chat', component: ChatComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];