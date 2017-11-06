import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  animations: [trigger('tabState', [
    state('default', style({
      backgroundColor: '#ff0000'
    }))
  ])]
})

export class QueryComponent implements OnInit {
  _class: String = 'big';
  @ViewChild('rectangle') rec: ElementRef;

  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this._class = 'big';
  }
  widthToggle() {
    this._class = this._class === 'big' ? 'small' : 'big';
  }
}
