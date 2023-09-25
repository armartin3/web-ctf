import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLocation } from '../activitylocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-activity-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="activityLocation.photo" alt="Exterior photo of {{activityLocation.name}}">
    <h2 class="listing-heading">{{ activityLocation.name }}</h2>
    <p class="listing-location">{{ activityLocation.city}}, {{activityLocation.state }}</p>
    <a [routerLink]="['/details', activityLocation.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./activity-location.component.css']
})
export class ActivityLocationComponent {
  @Input() activityLocation!: ActivityLocation;
}
