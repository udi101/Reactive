import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[table-host]'
})

export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
