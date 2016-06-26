import {RouterConfig, provideRouter} from '@angular/router';
import {CountDownComponent} from './components/countdown.component';

export const routes:RouterConfig = [
  {path: 'countdown', component: CountDownComponent},
  {path: '**', redirectTo: 'countdown'}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
