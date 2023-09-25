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
      name: 'DeBucks Corn Maze',
      city: 'Belleville',
      state: 'MI',
      photo: `/assets/cornmaze.png`,
    },
    {
      id: 1,
      name: 'LEGOLAND Discovery Center',
      city: 'Auburn Hills',
      state: 'MI',
      photo: `/assets/legoland.jpg`,
    },
    {
      id: 2,
      name: 'GM Heritage Center',
      city: 'Sterling Heights',
      state: 'MI',
      photo: `/assets/heritage-center.png`,
    },
    {
      id: 3,
      name: 'Sterling Heights Nature Center',
      city: 'Sterling Heights',
      state: 'MI',
      photo: `/assets/nature-center.jpg`,
    },
    {
      id: 4,
      name: 'Detroit Zoo',
      city: 'Royal Oak',
      state: 'MI',
      photo: `/assets/zoo.jpg`,
    },
    {
      id: 8,
      name: 'Historical Society Museum',
      city: 'Royal Oak',
      state: 'MI',
      photo: `assets/museum.jpg`,
    },
    {
      id: 6,
      name: 'Yates Cider Mill',
      city: 'Rochester Hills',
      state: 'MI',
      photo: `/assets/cider-mill.jpg`,
    },
    {
      id: 7,
      name: 'Detroit Institute of Arts',
      city: 'Detroit',
      state: 'MI',
      photo: `/assets/arts.jpg`,
    },
    {
      id: 5,
      name: 'Springdale Golf Course',
      city: 'Birmingham',
      state: 'MI',
      photo: `/assets/golf.jpg`,
    },
    {
      id: 9,
      name: 'Museum at Van Hoosen Farm',
      city: 'Rochester Hills',
      state: 'MI',
      photo: `/assets/museum2.jpg`,
    }
  ];

  getAllActivityLocations(): ActivityLocation[] {
    return this.activityLocationList;
  }
  
  getActivityLocationById(id: number): ActivityLocation | undefined {
    return this.activityLocationList.find(activityLocation => activityLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`RSVP received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
