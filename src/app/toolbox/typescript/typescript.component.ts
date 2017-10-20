import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
  animations: [trigger('tab-change', [
    state('first', style({
      left: '10px'
    })),
    state('second', style({
      left: '190px'
    })),
    state('third', style({
      left: '360px'
    })),
    transition('second <=> *', animate('300ms ease-out')),
    transition('first <=> third', animate('500ms ease-out'))
  ])]
})

export class TypescriptComponent implements OnInit {
  active_tab: String = 'first';
  constructor() { }
  ngOnInit() { }
}
