import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYER_MODULE_DECLARATIONS, PlayerRoutingModule} from  './Player-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayerRoutingModule
  ],
  declarations: PLAYER_MODULE_DECLARATIONS,
  exports: PLAYER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerModule { }