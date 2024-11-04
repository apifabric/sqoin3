import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSettingHomeComponent } from './home/GameSetting-home.component';
import { GameSettingNewComponent } from './new/GameSetting-new.component';
import { GameSettingDetailComponent } from './detail/GameSetting-detail.component';

const routes: Routes = [
  {path: '', component: GameSettingHomeComponent},
  { path: 'new', component: GameSettingNewComponent },
  { path: ':id', component: GameSettingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GameSetting-detail-permissions'
      }
    }
  }
];

export const GAMESETTING_MODULE_DECLARATIONS = [
    GameSettingHomeComponent,
    GameSettingNewComponent,
    GameSettingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameSettingRoutingModule { }