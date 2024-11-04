import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameHomeComponent } from './home/Game-home.component';
import { GameNewComponent } from './new/Game-new.component';
import { GameDetailComponent } from './detail/Game-detail.component';

const routes: Routes = [
  {path: '', component: GameHomeComponent},
  { path: 'new', component: GameNewComponent },
  { path: ':id', component: GameDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Game-detail-permissions'
      }
    }
  },{
    path: ':game_id/BallMovement', loadChildren: () => import('../BallMovement/BallMovement.module').then(m => m.BallMovementModule),
    data: {
        oPermission: {
            permissionId: 'BallMovement-detail-permissions'
        }
    }
},{
    path: ':game_id/Collision', loadChildren: () => import('../Collision/Collision.module').then(m => m.CollisionModule),
    data: {
        oPermission: {
            permissionId: 'Collision-detail-permissions'
        }
    }
},{
    path: ':game_id/GameSetting', loadChildren: () => import('../GameSetting/GameSetting.module').then(m => m.GameSettingModule),
    data: {
        oPermission: {
            permissionId: 'GameSetting-detail-permissions'
        }
    }
},{
    path: ':game_id/Match', loadChildren: () => import('../Match/Match.module').then(m => m.MatchModule),
    data: {
        oPermission: {
            permissionId: 'Match-detail-permissions'
        }
    }
},{
    path: ':game_id/PowerUp', loadChildren: () => import('../PowerUp/PowerUp.module').then(m => m.PowerUpModule),
    data: {
        oPermission: {
            permissionId: 'PowerUp-detail-permissions'
        }
    }
},{
    path: ':game_id/Score', loadChildren: () => import('../Score/Score.module').then(m => m.ScoreModule),
    data: {
        oPermission: {
            permissionId: 'Score-detail-permissions'
        }
    }
}
];

export const GAME_MODULE_DECLARATIONS = [
    GameHomeComponent,
    GameNewComponent,
    GameDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }