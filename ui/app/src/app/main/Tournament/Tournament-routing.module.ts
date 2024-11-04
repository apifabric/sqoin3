import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentHomeComponent } from './home/Tournament-home.component';
import { TournamentNewComponent } from './new/Tournament-new.component';
import { TournamentDetailComponent } from './detail/Tournament-detail.component';

const routes: Routes = [
  {path: '', component: TournamentHomeComponent},
  { path: 'new', component: TournamentNewComponent },
  { path: ':id', component: TournamentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tournament-detail-permissions'
      }
    }
  }
];

export const TOURNAMENT_MODULE_DECLARATIONS = [
    TournamentHomeComponent,
    TournamentNewComponent,
    TournamentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }