import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Paddle-new',
  templateUrl: './Paddle-new.component.html',
  styleUrls: ['./Paddle-new.component.scss']
})
export class PaddleNewComponent {
  @ViewChild("PaddleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}