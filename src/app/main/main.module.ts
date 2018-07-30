import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CourseListModule } from './course-list/course-list.module';
import { CourseListComponent } from './course-list/course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    CourseListModule
  ],
  declarations: [MainSectionComponent, ToolboxComponent],
  exports: [MainSectionComponent]
})
export class MainModule { }
