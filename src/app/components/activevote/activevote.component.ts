import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import {RouterLink} from '@angular/router';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-activevote',
  standalone: true,
  imports: [TimerComponent, RouterLink, RouterOutlet],
  templateUrl: './activevote.component.html',
  styleUrl: './activevote.component.css'
})
export class ActivevoteComponent {
  deadline = new Date('2024-12-31T23:59:59');
}
