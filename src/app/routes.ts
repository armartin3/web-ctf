import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Activities Near Warren, MI'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Activity details'
    }
  ];
  
  export default routeConfig;