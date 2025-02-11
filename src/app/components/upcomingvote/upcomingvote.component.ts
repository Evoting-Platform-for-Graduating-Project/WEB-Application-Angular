import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-upcomingvote',
  imports: [MatCardModule, MatMenuModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './upcomingvote.component.html',
  styleUrl: './upcomingvote.component.css'
})
export class UpcomingvoteComponent {

}
