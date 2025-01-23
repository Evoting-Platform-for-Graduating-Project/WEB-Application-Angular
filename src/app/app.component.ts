import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { ActivevoteComponent } from './components/activevote/activevote.component';
import {UpcomingvoteComponent} from './components/upcomingvote/upcomingvote.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LeftNavComponent, ActivevoteComponent, UpcomingvoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evoting';
}
