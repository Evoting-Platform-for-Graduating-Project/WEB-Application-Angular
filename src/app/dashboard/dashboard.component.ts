import { Component, ViewChild, ElementRef} from '@angular/core';
import {ActivevoteComponent} from "../components/activevote/activevote.component";
import { UpcomingvoteComponent} from '../components/upcomingvote/upcomingvote.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
    imports: [
        ActivevoteComponent, UpcomingvoteComponent, MatIconModule, MatButtonModule, NgIf
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('cardSlide') cardSlide!: ElementRef<HTMLElement>;
  showLeftButton: boolean = false;
  showRightButton: boolean = true;

  scrollLeft() {
    this.cardSlide.nativeElement.scrollBy ({left: -366, behavior: 'smooth'});
  }
  scrollRight() {
    this.cardSlide.nativeElement.scrollBy ({left: 366, behavior: 'smooth'});
  }

  showButtons() {
    const container = this.cardSlide.nativeElement;
    this.showLeftButton = container.scrollLeft > 0;
    this.showRightButton = container.scrollLeft + container.offsetWidth < container.scrollWidth;
  }

}
