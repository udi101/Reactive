import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  templateName = 1;
  @ViewChild('1', { read: TemplateRef }) tmp1: TemplateRef<ElementRef>;
  @ViewChild('2', { read: TemplateRef }) tmp2: TemplateRef<ElementRef>;
  @ViewChild('3', { read: TemplateRef }) tmp3: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  getTemplate(): TemplateRef<ElementRef> | ElementRef | void {
    switch (this.templateName) {
      case 1:
        return this.tmp1;
      case 2:
        return this.tmp2;
      case 3:
        return this.tmp3;
    }
  }

  toggleButton() {
    this.templateName = this.templateName % 3 + 1;
  }
}
