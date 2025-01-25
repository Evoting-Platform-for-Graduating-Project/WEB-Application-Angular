import { Routes } from '@angular/router';
import { VotingComponent} from './vote/voting/voting.component';
import { AftervoteComponent } from './aftervote/aftervote.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Voting', component: VotingComponent },
  { path: 'AfterVote', component: AftervoteComponent },

];
