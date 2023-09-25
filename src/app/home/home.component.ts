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
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-activity-location
      *ngFor="let activityLocation of filteredLocationList"
      [activityLocation]="activityLocation">
    </app-activity-location>
  </section>
`,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  activityLocationList: ActivityLocation[] = [];
  activityService: ActivitiesService = inject(ActivitiesService);
  filteredLocationList: ActivityLocation[] = [];
  constructor() {
    this.activityLocationList = this.activityService.getAllActivityLocations();
    this.filteredLocationList = this.activityLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.activityLocationList;
    }

    this.filteredLocationList = this.activityLocationList.filter(
      activityLocation => activityLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}