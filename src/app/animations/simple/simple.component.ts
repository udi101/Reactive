import { Component, OnInit, EventEmitter } from '@angular/core';
import { clickerTrigger, numberEnteredStateTrigger } from './simple.animations';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [clickerTrigger, numberEnteredStateTrigger
  ]
})
export class SimpleComponent implements OnInit {
  state: string;
  numberEntered() {
  }
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
