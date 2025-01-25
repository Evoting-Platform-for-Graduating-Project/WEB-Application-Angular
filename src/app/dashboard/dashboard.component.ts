import { Component } from '@angular/core';
import {ActivevoteComponent} from "../components/activevote/activevote.component";
import { UpcomingvoteComponent} from '../components/upcomingvote/upcomingvote.component';

@Component({
  selector: 'app-dashboard',
    imports: [
        ActivevoteComponent, UpcomingvoteComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
