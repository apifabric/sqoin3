import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BallMovement-new',
  templateUrl: './BallMovement-new.component.html',
  styleUrls: ['./BallMovement-new.component.scss']
})
export class BallMovementNewComponent {
  @ViewChild("BallMovementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}