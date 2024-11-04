import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Score-card.component.html',
  styleUrls: ['./Score-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Score-card]': 'true'
  }
})

export class ScoreCardComponent {


}