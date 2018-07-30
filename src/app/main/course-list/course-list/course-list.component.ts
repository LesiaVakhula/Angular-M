import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CourseService } from '../course.service';
import { element } from 'protractor';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: CourseItem[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
    
  }

  deleteItems (event) {
    console.log('hi from list', event);
    this.courseList = this.courseList.filter(elem => elem.id !== event);
  }

}
