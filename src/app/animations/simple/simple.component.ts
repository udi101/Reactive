import { Component, OnInit, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [
    trigger('clicker', [
      state('default', style({
        backgroundColor: '#3060f0'

      })),
      state('clicked', style({
        backgroundColor: 'orange',
        transform: 'translateX(300px) rotate(90deg)',
        height: '50px'
      })),
      transition('default <=> clicked', animate('300ms  ease-out'))
    ]),
    trigger('numberEnteredState', [
      state('unSelected', style({
        border: '1px solid black',
        padding: '6px',
        boxShadow: '2px 2px 4px'
      })),
      state('selected', style({
        border: '2px solid black',
        padding: '6px',
        backgroundColor: '#2050a0',
        color: 'white',
        transform: 'rotate(15deg)'
      })),
      transition('selected <=> *', [
        animate('300ms')
      ])
    ])
  ]
})
export class SimpleComponent implements OnInit {
  state: string;
  numberEntered;
  constructor() { }

  ngOnInit() {
    this.state = 'default';
  }
  changeState() {
    this.state = this.state === 'clicked' ? 'default' : 'clicked';
  }
  log(tt) {
    console.log(tt.target.value);
  }

}
