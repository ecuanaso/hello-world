import { CoursesService } from './services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent implements OnInit {
    email = 'example@example.com';
    title = 'List of Courses';
    imageUrl = 'http://lorempixel.com/400/200';
    courses: any[];
    array = [1, 2];

    constructor(private service: CoursesService){}

    ngOnInit(): void{
       this.service.getCourses().subscribe(
       (res: any) => this.courses = res,
       (error) => console.log(error));
    }

    createCourse(input: HTMLInputElement): void{
        let course = { title: input.value };
        input.value = '';

        this.service._createCourse(course).subscribe(res => {
            course['id'] = res.json().id;
            this.courses.splice(0, 0, course);
        }, (error: Response) => {
            if (error.status === 400){

            } else {
                alert('An unexected error');
                console.log(error);
            }
            
        });
    }

    deleteCourse(course): void{
        this.service._deleteCourse(course.id).subscribe((res: any) => {
            const index = this.courses.indexOf(course);
            this.courses.splice(index, 1);
            console.log('from the component');
        }, (error: Response) => {

            if (error.status === 404){
                alert('This course has been deleted.');
            } else {
                alert('An unexpected error occured.');
                console.log(error);
            }
        });
    }

    onKeyUp(): void{
        console.log(this.email);
    }
}


