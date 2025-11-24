import { Routes } from '@angular/router';
import { Memories } from './memories/memories';
import { Homepage } from './homepage/homepage';
import { Suprise } from './suprise/suprise';
import { Ending } from './ending/ending';

export const routes: Routes = [
    {
        path:'memories',
        component: Memories
    },
    {
        path:'home',
        component: Homepage
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'suprise',
        component:Suprise
    },
    {
        path:'ending',
        component:Ending
    }
];
