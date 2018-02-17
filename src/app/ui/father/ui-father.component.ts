import { Component, OnInit, ViewChild, TemplateRef, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'ui-father',
  templateUrl: './ui-father.component.html',
  styleUrls: ['./ui-father.component.scss']
})
export class UiFatherComponent implements OnInit {

  @ViewChild('father') father: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
