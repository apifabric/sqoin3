import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallHomeComponent } from './home/Ball-home.component';
import { BallNewComponent } from './new/Ball-new.component';
import { BallDetailComponent } from './detail/Ball-detail.component';

const routes: Routes = [
  {path: '', component: BallHomeComponent},
  { path: 'new', component: BallNewComponent },
  { path: ':id', component: BallDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Ball-detail-permissions'
      }
    }
  }
];

export const BALL_MODULE_DECLARATIONS = [
    BallHomeComponent,
    BallNewComponent,
    BallDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BallRoutingModule { }