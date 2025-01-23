import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgClass} from '@angular/common';


@Component({
  selector: 'app-voting',
  imports: [FormsModule, NgFor, NgClass],
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

  submitVote() {
    if (this.selectedCandidate) {
      alert(`Oddano głos na: ${this.selectedCandidate}`);
    }
  }

}
