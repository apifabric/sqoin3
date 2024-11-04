import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Collision-card.component.html',
  styleUrls: ['./Collision-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Collision-card]': 'true'
  }
})

export class CollisionCardComponent {


}