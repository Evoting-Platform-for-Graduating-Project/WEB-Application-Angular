import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent} from './components/navigation/navigation.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LeftNavComponent, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evoting';
}
