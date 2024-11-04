import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollisionHomeComponent } from './home/Collision-home.component';
import { CollisionNewComponent } from './new/Collision-new.component';
import { CollisionDetailComponent } from './detail/Collision-detail.component';

const routes: Routes = [
  {path: '', component: CollisionHomeComponent},
  { path: 'new', component: CollisionNewComponent },
  { path: ':id', component: CollisionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Collision-detail-permissions'
      }
    }
  }
];

export const COLLISION_MODULE_DECLARATIONS = [
    CollisionHomeComponent,
    CollisionNewComponent,
    CollisionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollisionRoutingModule { }