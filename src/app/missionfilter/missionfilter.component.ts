import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: string = '';
  
  @Output() yearFilter = new EventEmitter<string>();

  filterMissions() {
    this.yearFilter.emit(this.launchYear);
  }
}
