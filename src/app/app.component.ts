import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
  ],
  //header info (logo - Homes)
  template: `
  <main>
    <header class="brand-name"> <h1>Upcoming Activities</h1>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'activities';
}
