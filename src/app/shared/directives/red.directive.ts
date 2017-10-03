import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Red]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    const tt = this.el.nativeElement;
    tt.style.color = '#ff0000';
  }
}
