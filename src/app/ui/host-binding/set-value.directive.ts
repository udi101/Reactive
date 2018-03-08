import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[setValue]'
})
export class SetValueDirective {
  @HostBinding('value') value;
  @Input()
  set setValue(val: string) {
    this.value = val;
  }
  constructor() { }

}
