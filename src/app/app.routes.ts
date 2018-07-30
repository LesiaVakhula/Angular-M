import { Route } from '@angular/router';
import { CourseListComponent } from './main/course-list/course-list/course-list.component';

export const ROUTES: Route[] = [
    { path: 'listing', component: CourseListComponent },
    { path: '', redirectTo: 'listing', pathMatch: 'full' }
];
