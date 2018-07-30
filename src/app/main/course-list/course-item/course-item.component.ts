import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../course-item.model';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: CourseItem;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  public formatDuration: string;
  constructor() { }

  ngOnInit() {
    if ( this.courseItem.duration > 59 ) {
      const hour: number = parseInt((this.courseItem.duration / 60).toString(), 10 );
      const minutes: number = this.courseItem.duration - hour * 60;
      this.formatDuration = `${hour}h ${minutes}min`;
    }
  }

  editCourse() {
    console.log('Edit');
  }

  deleteCourse () {
    this.deleteItem.emit(this.courseItem.id);
  }

}
