import { Component, OnInit, ViewChild, ContentChild, TemplateRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ui-child',
  templateUrl: './ui-child.component.html',
  styleUrls: ['./ui-child.component.scss']
})

export class UiChildComponent implements OnInit, AfterViewInit {

  @ViewChild('view') view: TemplateRef<any>;
  @ContentChild('content') content: TemplateRef<any>;
  liveTemplate: TemplateRef<any>;
  showViewTemplate = true;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
  this.liveTemplate = this.view;
}, 0);
  }

toggleView() {
  this.showViewTemplate = !this.showViewTemplate;
  this.liveTemplate = this.showViewTemplate ? this.view : this.content;
}
}
