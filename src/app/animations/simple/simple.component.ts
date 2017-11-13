import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [
    trigger('clicker', [
      state('default', style({
        backgroundColor: '#3060f0',
        transform:'translateX(100px)'
      })),
      state('clicked', style({
        backgroundColor: 'orange'
      })),
      transition('default <=> clicked', animate('200ms  ease-in'))
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
