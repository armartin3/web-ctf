import { Injectable } from '@angular/core';
import { ActivityLocation } from './activitylocation';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  constructor() { }

  activityLocationList: ActivityLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start activity',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id: 1,
      name: 'A113 Transitional activity',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    },
    {
      id: 2,
      name: 'Warm Beds activity Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    },
    {
      id: 3,
      name: 'Homesteady activity',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    },
    {
      id: 7,
      name: 'Hopeful activity Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
    }
  ];

  getAllActivityLocations(): ActivityLocation[] {
    return this.activityLocationList;
  }
  
  getActivityLocationById(id: number): ActivityLocation | undefined {
    return this.activityLocationList.find(activityLocation => activityLocation.id === id);
  }
}