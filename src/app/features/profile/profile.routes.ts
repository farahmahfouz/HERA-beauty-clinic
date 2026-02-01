import { Routes } from "@angular/router";

export const profileRoutes: Routes = [
    {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
    },
    {
        path: 'info',
        loadComponent: () => import('./components/user-info/user-info.component')
            .then(m => m.UserInfoComponent)
    },
    {
        path: 'bookings',
        loadComponent: () => import('./components/user-bookings/user-bookings.component')
            .then(m => m.UserBookingsComponent)
    },
    {
        path: 'password',
        loadComponent: () => import('./components/change-password/change-password.component')
            .then(m => m.ChangePasswordComponent)
    }
]