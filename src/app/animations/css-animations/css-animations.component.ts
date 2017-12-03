import { Component, OnInit, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-css-animations',
  templateUrl: './css-animations.component.html',
  styleUrls: ['./css-animations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssAnimationsComponent implements OnInit {
  currentColor: String = 'red';
  counterValue = 7;

  names: Array<string>;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.names = new Array<string>();
  }
  increment() {
    this.counterValue++;
  }
  changeBackgroundColor() {
    this.currentColor = this.currentColor === 'white' ? 'red' : 'white';
  }

  addName() {
    this.names.push('erez');
    // this.names = [].concat(this.names, 'erez');
  }

  log(tt: any) {
    console.log(tt);
  }
}

