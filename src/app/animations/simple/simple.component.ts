import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animation, keyframes } from '@angular/animations';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [
    trigger('clicked', [
      state('default', style(
        {
          width: '150px',
          translateX: '10px',
          backgroundColor: 'orange',
          height: '60px'
        }
      )),
      state('clicked', style(
        {
          width: '120px',
          translateX: '0px',
          backgroundColor: 'orange',
          height: '90px'
        }
      )),
    ])
  ]
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
