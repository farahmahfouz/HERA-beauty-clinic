import { Routes } from '@angular/router';
import { resolveTitle } from './features/services/services.component';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { profileRoutes } from './features/profile/profile.routes';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
    },
    {
        path: 'account',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
        title: 'Account',
        children: profileRoutes,
        canActivate: [authGuard]
    }
];
