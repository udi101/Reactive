import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements OnInit {

  @ViewChild('vcr1', { read: ViewContainerRef }) vcr1: ViewContainerRef;
  @ViewChild('vcr2', { read: ViewContainerRef }) vcr2: ViewContainerRef;
  @ViewChild('t1') t1: TemplateRef<any>;
  @ViewChild('t2') t2: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  addTemplate1() {
    this.vcr1.createEmbeddedView(this.t1);
  }
  addTemplate2() {
    this.vcr2.createEmbeddedView(this.t2);
  }

  clearVcrs() {
    this.vcr1.clear();
    this.vcr2.clear();
  }
}
