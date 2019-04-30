import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../services/missions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  missions: Observable<any>;

  constructor(
    private missionService: MissionsService,
  ) { }

  ngOnInit() {
    this.missions = this.missionService.getMissions();
  }
}
