import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '.blue'
})
export class ClassSelectorDirective implements OnInit {

  elm: HTMLElement;
  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.elm = this.element.nativeElement;
    this.renderer2.setStyle(this.elm, 'color', '#2050c0');
  }
}
