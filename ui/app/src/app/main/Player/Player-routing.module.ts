import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerHomeComponent } from './home/Player-home.component';
import { PlayerNewComponent } from './new/Player-new.component';
import { PlayerDetailComponent } from './detail/Player-detail.component';

const routes: Routes = [
  {path: '', component: PlayerHomeComponent},
  { path: 'new', component: PlayerNewComponent },
  { path: ':id', component: PlayerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Player-detail-permissions'
      }
    }
  },{
    path: ':player_id/Leaderboard', loadChildren: () => import('../Leaderboard/Leaderboard.module').then(m => m.LeaderboardModule),
    data: {
        oPermission: {
            permissionId: 'Leaderboard-detail-permissions'
        }
    }
},{
    path: ':player1_id/Match', loadChildren: () => import('../Match/Match.module').then(m => m.MatchModule),
    data: {
        oPermission: {
            permissionId: 'Match-detail-permissions'
        }
    }
},{
    path: ':player2_id/Match', loadChildren: () => import('../Match/Match.module').then(m => m.MatchModule),
    data: {
        oPermission: {
            permissionId: 'Match-detail-permissions'
        }
    }
},{
    path: ':player_id/Paddle', loadChildren: () => import('../Paddle/Paddle.module').then(m => m.PaddleModule),
    data: {
        oPermission: {
            permissionId: 'Paddle-detail-permissions'
        }
    }
},{
    path: ':player_id/Score', loadChildren: () => import('../Score/Score.module').then(m => m.ScoreModule),
    data: {
        oPermission: {
            permissionId: 'Score-detail-permissions'
        }
    }
}
];

export const PLAYER_MODULE_DECLARATIONS = [
    PlayerHomeComponent,
    PlayerNewComponent,
    PlayerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }