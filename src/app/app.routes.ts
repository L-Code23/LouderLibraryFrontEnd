import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LibraryComponent } from './components/library/library.component';
import { StudentComponent } from './components/student/student.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    {path:"home", component:HomepageComponent},
    {path: "library", component: LibraryComponent},
    {path: "student", component: StudentComponent},
    {path: "", component: LandingComponent},
];
