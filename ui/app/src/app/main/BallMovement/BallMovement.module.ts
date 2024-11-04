import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BALLMOVEMENT_MODULE_DECLARATIONS, BallMovementRoutingModule} from  './BallMovement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BallMovementRoutingModule
  ],
  declarations: BALLMOVEMENT_MODULE_DECLARATIONS,
  exports: BALLMOVEMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BallMovementModule { }