import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PADDLE_MODULE_DECLARATIONS, PaddleRoutingModule} from  './Paddle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PaddleRoutingModule
  ],
  declarations: PADDLE_MODULE_DECLARATIONS,
  exports: PADDLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaddleModule { }