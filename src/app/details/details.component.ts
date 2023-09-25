import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../activities.service';
import { ActivityLocation } from '../activitylocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <img class="listing-photo" [src]="activityLocation?.photo"
      alt="Exterior photo of {{activityLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{activityLocation?.name}}</h2>
      <p class="listing-location">{{activityLocation?.city}}, {{activityLocation?.state}}</p>
    </section>
  </article>
`,  
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  activityService = inject(ActivitiesService);
  activityLocation: ActivityLocation | undefined;

  constructor() {
    const activityLocationId = Number(this.route.snapshot.params['id']);
    this.activityLocation = this.activityService.getActivityLocationById(activityLocationId);
  }

}