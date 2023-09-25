import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../activities.service';
import { ActivityLocation } from '../activitylocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  template: `
  <article>
    <img class="listing-photo" [src]="activityLocation?.photo"
      alt="Exterior photo of {{activityLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{activityLocation?.name}}</h2>
      <p class="listing-location">{{activityLocation?.city}}, {{activityLocation?.state}}</p>
    </section>
    <section class="rsvp-apply">
      <h2 class="section-heading">RSVP for the event:</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,  
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  activityService = inject(ActivitiesService);
  activityLocation: ActivityLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const activityLocationId = Number(this.route.snapshot.params['id']);
    this.activityLocation = this.activityService.getActivityLocationById(activityLocationId);
  }

  submitApplication() {
    this.activityService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}