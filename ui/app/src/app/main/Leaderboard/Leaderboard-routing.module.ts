import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardHomeComponent } from './home/Leaderboard-home.component';
import { LeaderboardNewComponent } from './new/Leaderboard-new.component';
import { LeaderboardDetailComponent } from './detail/Leaderboard-detail.component';

const routes: Routes = [
  {path: '', component: LeaderboardHomeComponent},
  { path: 'new', component: LeaderboardNewComponent },
  { path: ':id', component: LeaderboardDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Leaderboard-detail-permissions'
      }
    }
  }
];

export const LEADERBOARD_MODULE_DECLARATIONS = [
    LeaderboardHomeComponent,
    LeaderboardNewComponent,
    LeaderboardDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }