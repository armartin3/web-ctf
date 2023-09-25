import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  //header info (logo - Homes)
  template: `
  <main>
    <header class="brand-name"> <h1>Upcoming Activities</h1>
    </header>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'activities';
}
