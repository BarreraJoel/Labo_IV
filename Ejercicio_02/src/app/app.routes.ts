import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bienvenida',
        loadComponent: () => import('./components/bienvenida/bienvenida.component').then(m => m.BienvenidaComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./components/error/error.component').then(m => m.ErrorComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: '**',
        loadComponent: () => import('./components/error/error.component').then(m => m.ErrorComponent)
    }
];
