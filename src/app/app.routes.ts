import { Routes } from '@angular/router';
import { resolveTitle } from './features/services/services.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'services/:slug',
        loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
        title: resolveTitle
    },
    {
        path: 'about',
        loadComponent: () => import('./features/clinc-info/clinc-info.component').then(m => m.ClincInfoComponent),
        title: 'About Us'
    }
];
