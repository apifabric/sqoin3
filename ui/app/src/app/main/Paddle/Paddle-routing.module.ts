import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaddleHomeComponent } from './home/Paddle-home.component';
import { PaddleNewComponent } from './new/Paddle-new.component';
import { PaddleDetailComponent } from './detail/Paddle-detail.component';

const routes: Routes = [
  {path: '', component: PaddleHomeComponent},
  { path: 'new', component: PaddleNewComponent },
  { path: ':id', component: PaddleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Paddle-detail-permissions'
      }
    }
  }
];

export const PADDLE_MODULE_DECLARATIONS = [
    PaddleHomeComponent,
    PaddleNewComponent,
    PaddleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaddleRoutingModule { }