import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PowerUp-new',
  templateUrl: './PowerUp-new.component.html',
  styleUrls: ['./PowerUp-new.component.scss']
})
export class PowerUpNewComponent {
  @ViewChild("PowerUpForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}