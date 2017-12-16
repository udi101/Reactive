import { Directive, ViewChild, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[numberInput]'
})
export class NumberDirective implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.style.width = '200px';
    // this.el.nativeElement.value = 41;
  }
}
