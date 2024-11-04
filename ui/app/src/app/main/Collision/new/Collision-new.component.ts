import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Collision-new',
  templateUrl: './Collision-new.component.html',
  styleUrls: ['./Collision-new.component.scss']
})
export class CollisionNewComponent {
  @ViewChild("CollisionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}