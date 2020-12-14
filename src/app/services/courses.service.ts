import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class AppError {
    constructor(public originalError?: any) {}
}

@Injectable()

export class CoursesService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {}

      // get all courses
    getCourses(): Observable<any[]> {
      const results = this.http.get<any[]>(this.apiUrl).pipe(
            tap(res => console.log('these are the results', res)),
            map(res => res)
          );
      return results;
    }

    // get one course
    getCourse(id): Observable<any> {
      const result = this.http.get<any>(`${this.apiUrl}/${id}`);
      return result;
    }

    // create a course
    _createCourse(course: any): Observable<any>{
      const result = this.http.post<any>(this.apiUrl, course);
      return result;
    }

    // delete a course
    _deleteCourse(id: any): Observable<any> {
      const result = this.http.delete<any>(this.apiUrl + '/' + id).pipe(catchError(this.handleError));
      // result.catch((error: Response) => {
      //   return Observable.throw(new AppError(error));
      // });
     // result.catchError(this.handleError);
   

      return result;
    }

    private handleError(error: HttpErrorResponse) {

      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'ASP.NET Core server error');
  }
}
