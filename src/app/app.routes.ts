import { ReturnStatement } from '@angular/compiler';
import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '';
    pathMatch: 'full',
    loadComponent() {
        return import('./')
    },
}];
