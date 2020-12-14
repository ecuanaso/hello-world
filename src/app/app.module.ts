import { AppRoutingModule } from './app-routing.module';
import { AuthorsService } from './authors.service';
import { CoursesService } from './services/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule } from '@angular/forms';
import { TrimPipe } from './trim.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactForm2Component } from './contact-form2/contact-form2.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { AddFocusDirective } from './add-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    TrimPipe,
    FavoriteComponent,
    LikeComponent,
    ContactFormComponent,
    ContactForm2Component,
    AddFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
