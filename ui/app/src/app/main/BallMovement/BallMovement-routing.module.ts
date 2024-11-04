import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallMovementHomeComponent } from './home/BallMovement-home.component';
import { BallMovementNewComponent } from './new/BallMovement-new.component';
import { BallMovementDetailComponent } from './detail/BallMovement-detail.component';

const routes: Routes = [
  {path: '', component: BallMovementHomeComponent},
  { path: 'new', component: BallMovementNewComponent },
  { path: ':id', component: BallMovementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BallMovement-detail-permissions'
      }
    }
  }
];

export const BALLMOVEMENT_MODULE_DECLARATIONS = [
    BallMovementHomeComponent,
    BallMovementNewComponent,
    BallMovementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BallMovementRoutingModule { }