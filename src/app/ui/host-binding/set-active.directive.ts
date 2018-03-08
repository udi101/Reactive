import { Directive, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[setActive]'
})
export class SetActiveDirective implements OnInit {

  @Input() set setActive(val) {
    this.active = val === 'true';
  }

  @HostBinding('class.active') active;


  constructor() { }

  ngOnInit(): void {
    console.log(this.active);
  }
}
