import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {InitComponent} from './init/init.component';
import {AuthGuard} from './service/auth.guard';

//app routes definitions
const appRoutes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: 'init', 
        component: InitComponent,
        canActivate: [AuthGuard]
    },
     { 
        path: '**', 
        redirectTo: '' 
    }
];

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
