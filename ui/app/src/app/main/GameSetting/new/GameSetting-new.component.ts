import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GameSetting-new',
  templateUrl: './GameSetting-new.component.html',
  styleUrls: ['./GameSetting-new.component.scss']
})
export class GameSettingNewComponent {
  @ViewChild("GameSettingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}