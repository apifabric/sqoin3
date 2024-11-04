import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {POWERUP_MODULE_DECLARATIONS, PowerUpRoutingModule} from  './PowerUp-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PowerUpRoutingModule
  ],
  declarations: POWERUP_MODULE_DECLARATIONS,
  exports: POWERUP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PowerUpModule { }