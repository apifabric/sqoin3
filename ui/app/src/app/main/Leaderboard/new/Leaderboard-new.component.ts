import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Leaderboard-new',
  templateUrl: './Leaderboard-new.component.html',
  styleUrls: ['./Leaderboard-new.component.scss']
})
export class LeaderboardNewComponent {
  @ViewChild("LeaderboardForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}