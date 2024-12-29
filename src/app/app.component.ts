import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { ActivevoteComponent } from './components/activevote/activevote.component';
import { TimerComponent } from './components/timer/timer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LeftNavComponent, ActivevoteComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evoting';
  deadline: Date = new Date('2024-12-28T23:59:59');
}
