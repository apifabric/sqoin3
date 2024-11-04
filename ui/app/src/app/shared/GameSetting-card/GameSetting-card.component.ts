import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GameSetting-card.component.html',
  styleUrls: ['./GameSetting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GameSetting-card]': 'true'
  }
})

export class GameSettingCardComponent {


}