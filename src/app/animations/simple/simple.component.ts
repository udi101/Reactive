import { Component, OnInit } from '@angular/core';
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
        height: '300px'
      })),
      transition('default <=> clicked', animate('200ms  ease-out'))
    ])
  ]
})
export class SimpleComponent implements OnInit {
  state: string;
  constructor() { }

  ngOnInit() {
    this.state = 'default';
  }
  changeState() {
    this.state = this.state === 'clicked' ? 'default' : 'clicked';
  }

}
