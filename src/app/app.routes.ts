import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { OperacionesComponentComponent } from './components/operaciones-component/operaciones-component.component';


export const routes: Routes = [
    {
        path : 'component/home',
        component : HomeComponentComponent
    },
    {
        path : 'component/operaciones',
        component : OperacionesComponentComponent
    }
    
];
