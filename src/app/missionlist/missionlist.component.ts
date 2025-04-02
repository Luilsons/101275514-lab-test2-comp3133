import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../services/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];

  filterYear: string = '';
  filterLaunch: string = '';
  filterLanding: string = '';

  constructor(private spacexService: SpacexapiService) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe((data: Mission[]) => {
      this.missions = data;
      this.filteredMissions = data;
    });
  }

  applyFilters(): void {
    this.filteredMissions = this.missions.filter(mission => {
      const matchesYear = this.filterYear === '' || mission.launch_year === this.filterYear;

      const core = mission.rocket?.first_stage?.cores?.[0];
      const matchesLaunch =
        this.filterLaunch === '' ||
        (this.filterLaunch === 'success' && core?.launch_success === true) ||
        (this.filterLaunch === 'failed' && core?.launch_success === false);

      const matchesLanding =
        this.filterLanding === '' ||
        (this.filterLanding === 'success' && core?.land_success === true) ||
        (this.filterLanding === 'failed' && core?.land_success === false);

      return matchesYear && matchesLaunch && matchesLanding;
    });
  }

  resetFilters(): void {
    this.filterYear = '';
    this.filterLaunch = '';
    this.filterLanding = '';
    this.filteredMissions = this.missions;
  }
}
