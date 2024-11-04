import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Paddle-card.component.html',
  styleUrls: ['./Paddle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Paddle-card]': 'true'
  }
})

export class PaddleCardComponent {


}