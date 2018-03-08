import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[clickListener]'
})
export class ClickListenerDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('listener') showClicked: (ev: MouseEvent) => {};

  @HostListener('click', ['$event'])
  onClicked(evt: MouseEvent) {
    this.showClicked(evt);
  }
  constructor() { }

}
