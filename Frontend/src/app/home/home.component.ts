import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MapComponent } from '../map/map.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { MenusupComponent } from '../menusup/menusup.component';
import { AgendaComponent } from '../agenda/agenda.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, MapComponent, CalendarComponent, MenusupComponent, AgendaComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
