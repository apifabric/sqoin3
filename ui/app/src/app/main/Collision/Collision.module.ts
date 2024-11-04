import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COLLISION_MODULE_DECLARATIONS, CollisionRoutingModule} from  './Collision-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CollisionRoutingModule
  ],
  declarations: COLLISION_MODULE_DECLARATIONS,
  exports: COLLISION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CollisionModule { }