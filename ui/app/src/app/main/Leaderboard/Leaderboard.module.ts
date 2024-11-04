import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LEADERBOARD_MODULE_DECLARATIONS, LeaderboardRoutingModule} from  './Leaderboard-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LeaderboardRoutingModule
  ],
  declarations: LEADERBOARD_MODULE_DECLARATIONS,
  exports: LEADERBOARD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeaderboardModule { }