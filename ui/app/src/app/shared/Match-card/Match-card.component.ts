import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Match-card.component.html',
  styleUrls: ['./Match-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Match-card]': 'true'
  }
})

export class MatchCardComponent {


}