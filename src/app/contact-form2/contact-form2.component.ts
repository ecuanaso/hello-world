import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form2',
  templateUrl: './contact-form2.component.html',
  styleUrls: ['./contact-form2.component.css'],
  exportAs: 'ngForm'
})
export class ContactForm2Component {
  courses = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];

  constructor() { }


  createCourse(form: any): void{
    console.log(form);
  }
}
