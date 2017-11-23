import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-css-animations',
  templateUrl: './css-animations.component.html',
  styleUrls: ['./css-animations.component.scss']
})
export class CssAnimationsComponent implements OnInit {
  currentColor: String = 'red';
  counterValue = 7;


  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.counterValue++;
  }
  changeBackgroundColor() {
    this.currentColor = this.currentColor === 'white' ? 'red' : 'white';
  }
  log(tt: any) {
    console.log(tt);
  }
}

