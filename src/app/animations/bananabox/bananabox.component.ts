import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bananabox',
  templateUrl: './bananabox.component.html',
  styleUrls: ['./bananabox.component.scss']
})
export class BananaboxComponent implements OnInit {

  counterValue = 0;
  @Output()
  counterChange = new EventEmitter();

  @Input()
  get counter() {
    return this.counterValue;
  }
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  constructor() { }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
  ngOnInit() {
  }

}
