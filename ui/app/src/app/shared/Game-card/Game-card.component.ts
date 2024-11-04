import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Game-card.component.html',
  styleUrls: ['./Game-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Game-card]': 'true'
  }
})

export class GameCardComponent {


}