import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLocation } from '../activitylocation';


@Component({
  selector: 'app-activity-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      activity-location works!
    </p>
  `,
  styleUrls: ['./activity-location.component.css']
})
export class ActivityLocationComponent {
  @Input() activityLocation!: ActivityLocation;
}
