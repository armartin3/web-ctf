import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLocationComponent } from '../activity-location/activity-location.component';
import { ActivityLocation } from '../activitylocation';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
  ActivityLocationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by activity">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-activity-location
    *ngFor="let activityLocation of activityLocationList"
    [activityLocation]="activityLocation">
    </app-activity-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  activityLocationList: ActivityLocation[] = [];
  activitiesService: ActivitiesService = inject(ActivitiesService);

  constructor() {
    this.activityLocationList = this.activitiesService.getAllActivityLocations();
  }
}