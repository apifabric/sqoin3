import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TOURNAMENT_MODULE_DECLARATIONS, TournamentRoutingModule} from  './Tournament-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TournamentRoutingModule
  ],
  declarations: TOURNAMENT_MODULE_DECLARATIONS,
  exports: TOURNAMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TournamentModule { }