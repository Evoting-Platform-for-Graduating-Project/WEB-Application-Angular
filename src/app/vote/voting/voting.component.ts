import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgIf} from '@angular/common';
import { NgClass} from '@angular/common';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-voting',
  imports: [FormsModule, NgFor, NgClass, NgIf, RouterLink],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.css'
})
export class VotingComponent {
  candidates = [
    {id: 1, name: 'KONONOWICZ KRZYSZTOF', party: 'Nazwa partii'},
    {id: 2, name: 'KONONOWICZ KRZYSZTOF', party: 'Nazwa partii'},
    {id: 3, name: 'KONONOWICZ KRZYSZTOF', party: 'Nazwa partii'},
    {id: 4, name: 'KONONOWICZ KRZYSZTOF', party: 'Nazwa partii'},
  ];
  selectedCandidate: number  | null = null;
  showPopUp: boolean = false;

  openConfirmation () {
    this.showPopUp = true;
  }

  closeConfirmation () {
    this.showPopUp = false;
  }

  submitVote() {
    if (this.selectedCandidate) {
      alert(`Oddano głos na: ${this.selectedCandidate}`);
      this.closeConfirmation()
    }
  }

}
