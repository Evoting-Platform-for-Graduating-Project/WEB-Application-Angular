import { Component, Input, OnInit} from '@angular/core';
import { CountdownConfig, CountdownModule} from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CountdownModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {
  @Input() deadline!: Date;
  countdownConfig: CountdownConfig = {
    leftTime: 0,
    format: 'HH:mm:ss',
  };

  // ngOnChanges(): void {
  //   if (this.deadline) {
  //     const now = new Date().getTime();
  //     const deadlineTime = new Date(this.deadline).getTime();
  //     const diffInSeconds = Math.max(Math.floor((deadlineTime - now) / 1000), 0);

  //     this.countdownConfig = {
  //       leftTime: diffInSeconds,
  //       format: 'HH:mm:ss',
  //       notify: [0]
  //     };
  //   }
  // }

  ngOnInit() {
    this.updateCountdown();
  }

  private updateCountdown() {
    if (this.deadline) {
      const now = new Date().getTime();
      const deadlineTime = new Date(this.deadline).getTime();
      const diffInSeconds = Math.max(Math.floor((deadlineTime - now) / 1000), 0);

      this.countdownConfig = {
        ...this.countdownConfig,
        leftTime: diffInSeconds
      };
    }
  }
}
