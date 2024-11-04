import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchHomeComponent } from './home/Match-home.component';
import { MatchNewComponent } from './new/Match-new.component';
import { MatchDetailComponent } from './detail/Match-detail.component';

const routes: Routes = [
  {path: '', component: MatchHomeComponent},
  { path: 'new', component: MatchNewComponent },
  { path: ':id', component: MatchDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Match-detail-permissions'
      }
    }
  }
];

export const MATCH_MODULE_DECLARATIONS = [
    MatchHomeComponent,
    MatchNewComponent,
    MatchDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }