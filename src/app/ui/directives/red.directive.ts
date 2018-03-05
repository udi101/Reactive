import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.red, [red]'
})
export class RedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }
  ngOnInit() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'artium');
    this.renderer2.setAttribute(this.elementRef.nativeElement, 'value', '15');
  }
}
