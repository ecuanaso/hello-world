import { INCREMENT } from './store/actions';
import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello-world';
  @select('counter') count;
  @select(['messaging', 'newMessages']) messages;

  post = {
    status: true
  };

  likes = {
    count: 0,
    status: false
  };

  constructor(private ngRedux: NgRedux<IAppState>){
    // ngRedux.subscribe(() => {
    //   const store = ngRedux.getState();
    //   this.counter = store.counter;
    //   console.log(ngRedux.getState());
    // });
  }

  onFavoriteChange(status: boolean): void {
      console.log('this is coming from like component', status);
  }

  onLikeChange(eventArgs): void{
   console.log('these are the event args', eventArgs);
  }

  increment(): void{
    // this.count++;
    this.ngRedux.dispatch({ type: INCREMENT }); // instead of manipulating the state directly we dispatch an action
  }
}
