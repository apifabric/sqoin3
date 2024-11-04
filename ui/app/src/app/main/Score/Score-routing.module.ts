import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreHomeComponent } from './home/Score-home.component';
import { ScoreNewComponent } from './new/Score-new.component';
import { ScoreDetailComponent } from './detail/Score-detail.component';

const routes: Routes = [
  {path: '', component: ScoreHomeComponent},
  { path: 'new', component: ScoreNewComponent },
  { path: ':id', component: ScoreDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Score-detail-permissions'
      }
    }
  }
];

export const SCORE_MODULE_DECLARATIONS = [
    ScoreHomeComponent,
    ScoreNewComponent,
    ScoreDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }