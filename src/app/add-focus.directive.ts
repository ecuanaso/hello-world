import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddFocus]'
})
export class AddFocusDirective implements OnInit{

  constructor(private el: ElementRef, private r: Renderer2) { }

  ngOnInit(): void{
    console.log('test', this.el);
  }

}
