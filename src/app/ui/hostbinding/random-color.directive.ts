import { Directive, HostBinding, AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[randomColor]'
})
export class RandomColorDirective implements OnInit, AfterViewInit {

  @HostBinding('style.color') color = '#2070c0';
  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.renderer2.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
    this.renderer2.setStyle(this.el.nativeElement, 'textDecoration', 'underline');
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      this.color = this.getrandomcolor();
    }, 1000);
  }

  getrandomcolor(): string {
    const allColors = '0123456789abcdf';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result = result.concat(allColors[Math.round(Math.random() * 14)]);
    }
    return result;
  }
}

