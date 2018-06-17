import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query } from '@angular/animations';
import { queryAnimation, lstAnimation } from './query.animations';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  animations: [queryAnimation, lstAnimation]
})

export class QueryComponent implements OnInit {
  testResults = new Array<number>();
  sharkState = 'first';

  constructor() { }

  ngOnInit() {
    this.testResults.push(5);
  }

  toggleAnimation() {
    this.sharkState = this.sharkState === 'first' ? 'last' : 'first';
  }
  addTestResult(): void {
    this.testResults.push(Math.round(Math.random() * 100));
  }
}
