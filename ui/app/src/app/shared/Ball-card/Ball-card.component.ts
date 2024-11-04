import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Ball-card.component.html',
  styleUrls: ['./Ball-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Ball-card]': 'true'
  }
})

export class BallCardComponent {


}