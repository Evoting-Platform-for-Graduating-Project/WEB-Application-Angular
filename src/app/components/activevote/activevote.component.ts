import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-activevote',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './activevote.component.html',
  styleUrl: './activevote.component.css'
})
export class ActivevoteComponent {
  deadline = new Date('2024-12-31T23:59:59');
}
