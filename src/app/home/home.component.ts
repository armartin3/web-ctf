import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLocationComponent } from '../activity-location/activity-location.component';
import { ActivityLocation } from '../activitylocation';

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
    <app-activity-location [activityLocation]="activityLocation"></app-activity-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  activityLocation: ActivityLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
  };
}