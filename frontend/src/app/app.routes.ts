import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { LatestComponent } from './components/latest/latest.component';

export const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'latest', component: LatestComponent },
  { path: '**', redirectTo: '/latest' }
];
