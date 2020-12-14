import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseId: any;
  selectedCourse: any;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.courseId = id;
    // });

    const courseID: number = parseInt(this.route.snapshot.params['id']);
    this.coursesService.getCourse(courseID)
    .subscribe(
      (data: any) => this.selectedCourse = data,
      (err: any) => console.log(err)
    );
  }
}
