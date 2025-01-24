import { Component } from '@angular/core';
import { LeftNavComponent} from '../components/left-nav/left-nav.component';
import { HeaderComponent} from '../components/header/header.component';

@Component({
  selector: 'app-aftervote',
  imports: [LeftNavComponent, HeaderComponent],
  templateUrl: './aftervote.component.html',
  styleUrl: './aftervote.component.css'
})
export class AftervoteComponent {

}
