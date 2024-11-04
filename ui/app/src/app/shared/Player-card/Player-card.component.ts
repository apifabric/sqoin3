import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Player-card.component.html',
  styleUrls: ['./Player-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Player-card]': 'true'
  }
})

export class PlayerCardComponent {


}