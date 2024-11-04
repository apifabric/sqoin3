import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BallMovement-card.component.html',
  styleUrls: ['./BallMovement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BallMovement-card]': 'true'
  }
})

export class BallMovementCardComponent {


}