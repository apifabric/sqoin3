import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerUpHomeComponent } from './home/PowerUp-home.component';
import { PowerUpNewComponent } from './new/PowerUp-new.component';
import { PowerUpDetailComponent } from './detail/PowerUp-detail.component';

const routes: Routes = [
  {path: '', component: PowerUpHomeComponent},
  { path: 'new', component: PowerUpNewComponent },
  { path: ':id', component: PowerUpDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PowerUp-detail-permissions'
      }
    }
  }
];

export const POWERUP_MODULE_DECLARATIONS = [
    PowerUpHomeComponent,
    PowerUpNewComponent,
    PowerUpDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerUpRoutingModule { }