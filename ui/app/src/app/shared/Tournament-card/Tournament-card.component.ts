import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Tournament-card.component.html',
  styleUrls: ['./Tournament-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Tournament-card]': 'true'
  }
})

export class TournamentCardComponent {


}