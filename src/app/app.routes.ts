import { Routes } from '@angular/router';
import { VotingComponent} from './vote/voting/voting.component';
import { AftervoteComponent } from './aftervote/aftervote.component';

export const routes: Routes = [
  { path: 'Voting', component: VotingComponent },
  { path: 'AfterVote', component: AftervoteComponent },

];
