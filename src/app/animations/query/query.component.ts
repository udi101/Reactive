import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, AnimationEvent } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  frmWorker: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmWorker = this.formBuilder.group(
      {
        firstName: [{ value: '', disabled: false }, Validators.minLength(3)],
        lastName: ['', Validators.minLength(3)]
      });

    this.testResults.push(5);
  }

  toggleAnimation() {
    this.sharkState = this.sharkState === 'first' ? 'last' : 'first';
  }
  startAnimation(event: AnimationEvent) {
    console.log(event);
  }
  endAnimation(event: AnimationEvent) {
    console.log(event);
  }

  addTestResult(): void {
    this.testResults.push(Math.round(Math.random() * 100));
  }
}
