import { MenuRootItem } from 'ontimize-web-ngx';

import { BallCardComponent } from './Ball-card/Ball-card.component';

import { BallMovementCardComponent } from './BallMovement-card/BallMovement-card.component';

import { CollisionCardComponent } from './Collision-card/Collision-card.component';

import { GameCardComponent } from './Game-card/Game-card.component';

import { GameSettingCardComponent } from './GameSetting-card/GameSetting-card.component';

import { LeaderboardCardComponent } from './Leaderboard-card/Leaderboard-card.component';

import { MatchCardComponent } from './Match-card/Match-card.component';

import { PaddleCardComponent } from './Paddle-card/Paddle-card.component';

import { PlayerCardComponent } from './Player-card/Player-card.component';

import { PowerUpCardComponent } from './PowerUp-card/PowerUp-card.component';

import { ScoreCardComponent } from './Score-card/Score-card.component';

import { TournamentCardComponent } from './Tournament-card/Tournament-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Ball', name: 'BALL', icon: 'view_list', route: '/main/Ball' }
    
        ,{ id: 'BallMovement', name: 'BALLMOVEMENT', icon: 'view_list', route: '/main/BallMovement' }
    
        ,{ id: 'Collision', name: 'COLLISION', icon: 'view_list', route: '/main/Collision' }
    
        ,{ id: 'Game', name: 'GAME', icon: 'view_list', route: '/main/Game' }
    
        ,{ id: 'GameSetting', name: 'GAMESETTING', icon: 'view_list', route: '/main/GameSetting' }
    
        ,{ id: 'Leaderboard', name: 'LEADERBOARD', icon: 'view_list', route: '/main/Leaderboard' }
    
        ,{ id: 'Match', name: 'MATCH', icon: 'view_list', route: '/main/Match' }
    
        ,{ id: 'Paddle', name: 'PADDLE', icon: 'view_list', route: '/main/Paddle' }
    
        ,{ id: 'Player', name: 'PLAYER', icon: 'view_list', route: '/main/Player' }
    
        ,{ id: 'PowerUp', name: 'POWERUP', icon: 'view_list', route: '/main/PowerUp' }
    
        ,{ id: 'Score', name: 'SCORE', icon: 'view_list', route: '/main/Score' }
    
        ,{ id: 'Tournament', name: 'TOURNAMENT', icon: 'view_list', route: '/main/Tournament' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BallCardComponent

    ,BallMovementCardComponent

    ,CollisionCardComponent

    ,GameCardComponent

    ,GameSettingCardComponent

    ,LeaderboardCardComponent

    ,MatchCardComponent

    ,PaddleCardComponent

    ,PlayerCardComponent

    ,PowerUpCardComponent

    ,ScoreCardComponent

    ,TournamentCardComponent

];