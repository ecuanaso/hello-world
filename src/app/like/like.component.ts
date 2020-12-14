import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() tweets: number;
  @Input() status: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.status = !this.status;
    this.tweets = (this.status) ? ++this.tweets : --this.tweets;
  //  this.tweets += (this.status) ? -1 : +1;
    this.change.emit({ status: this.status, tweets: this.tweets });
  }

}
