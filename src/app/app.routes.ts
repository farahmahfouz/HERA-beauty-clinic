import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'laser-hair-removal',
        loadComponent: () => import('./features/laser-hair-removal/laser-hair-removal.component').then(m => m.LaserHairRemovalComponent),
        title: 'Laser Hair Removal'
    },
    {
        path: 'filler',
        loadComponent: () => import('./features/filler/filler.component').then(m => m.FillerComponent),
        title: 'Filler'
    },
    {
        path: 'about',
        loadComponent: () => import('./features/clinc-info/clinc-info.component').then(m => m.ClincInfoComponent),
        title: 'About Us'
    }
];
