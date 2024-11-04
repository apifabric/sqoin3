import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Tournament-new',
  templateUrl: './Tournament-new.component.html',
  styleUrls: ['./Tournament-new.component.scss']
})
export class TournamentNewComponent {
  @ViewChild("TournamentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}