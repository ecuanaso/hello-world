import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ContactForm2Component } from './contact-form2/contact-form2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'contact', component: ContactFormComponent},
  { path: 'contact2', component: ContactForm2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
