import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PowerUp-card.component.html',
  styleUrls: ['./PowerUp-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PowerUp-card]': 'true'
  }
})

export class PowerUpCardComponent {


}