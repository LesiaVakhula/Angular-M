import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourseList(): CourseItem[]{
    return [
      {
        id: 1,
        title: 'Angular Intro',
        creationDate: '22/12/2018',
        duration: 120,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 2,
        title: 'Webpack Intro',
        creationDate: '22/12/2018',
        duration: 78,
        description: 'Ut, blanditiis accusantium numquam doloribus, quia incidunt quibusdam odio perferendis libero ea enim at.'
      }
    ];
  }
}
