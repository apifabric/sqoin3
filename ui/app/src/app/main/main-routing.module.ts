import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Ball', loadChildren: () => import('./Ball/Ball.module').then(m => m.BallModule) },
    
        { path: 'BallMovement', loadChildren: () => import('./BallMovement/BallMovement.module').then(m => m.BallMovementModule) },
    
        { path: 'Collision', loadChildren: () => import('./Collision/Collision.module').then(m => m.CollisionModule) },
    
        { path: 'Game', loadChildren: () => import('./Game/Game.module').then(m => m.GameModule) },
    
        { path: 'GameSetting', loadChildren: () => import('./GameSetting/GameSetting.module').then(m => m.GameSettingModule) },
    
        { path: 'Leaderboard', loadChildren: () => import('./Leaderboard/Leaderboard.module').then(m => m.LeaderboardModule) },
    
        { path: 'Match', loadChildren: () => import('./Match/Match.module').then(m => m.MatchModule) },
    
        { path: 'Paddle', loadChildren: () => import('./Paddle/Paddle.module').then(m => m.PaddleModule) },
    
        { path: 'Player', loadChildren: () => import('./Player/Player.module').then(m => m.PlayerModule) },
    
        { path: 'PowerUp', loadChildren: () => import('./PowerUp/PowerUp.module').then(m => m.PowerUpModule) },
    
        { path: 'Score', loadChildren: () => import('./Score/Score.module').then(m => m.ScoreModule) },
    
        { path: 'Tournament', loadChildren: () => import('./Tournament/Tournament.module').then(m => m.TournamentModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }