import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { MenusupComponent } from './menusup/menusup.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AgendaComponent } from './agenda/agenda.component';

export const routes: Routes = [
    {path:"",component:HomeComponent, pathMatch:"full"},
    {path:"",component:DashboardComponent, pathMatch:"full"},
    {path:"",component:MapComponent, pathMatch:"full"},
    {path:"",component:MenusupComponent, pathMatch:"full"},
    {path:"",component:CalendarComponent, pathMatch:"full"},
    {path:"",component:AgendaComponent, pathMatch:"full"}




];
