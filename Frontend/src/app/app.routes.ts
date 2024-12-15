import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"",component:HomeComponent, pathMatch:"full"},
    {path:"",component:DashboardComponent, pathMatch:"full"}

];
