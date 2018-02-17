import { Component, OnInit, ViewChildren, QueryList, TemplateRef, ContentChildren } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {
  @ViewChildren(TemplateRef) allViews: QueryList<TemplateRef<any>>;
  @ContentChildren(TemplateRef) allContent: QueryList<TemplateRef<any>>;
  @ViewChildren('view1,view2') selectedViews: QueryList<TemplateRef<any>>;
  showCounters = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShowCounters() {
    this.showCounters = !this.showCounters;
  }
}
