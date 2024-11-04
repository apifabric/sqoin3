import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Leaderboard-card.component.html',
  styleUrls: ['./Leaderboard-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Leaderboard-card]': 'true'
  }
})

export class LeaderboardCardComponent {


}