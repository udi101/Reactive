import { Component, OnInit, ContentChild, TemplateRef, AfterViewChecked } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent implements OnInit, AfterViewChecked {
  tt: BehaviorSubject<string> = new BehaviorSubject<string>('udi');
  stringNames: Array<string> = new Array<string>();
  @ContentChild('divAsContent', { read: TemplateRef }) divAsContent: TemplateRef<any>;
  constructor() { }


  ngOnInit() {
    // console.log(this.divAsContent);
    this.tt.subscribe((x) => {
      this.stringNames = [...this.stringNames, x];
      console.log(this.stringNames);
      if (x === 'Ella') { console.log(this.tt.getValue()); }
    });
    this.tt.next('erez');
    this.tt.next('mazal');
    this.tt.next('Ella');
  }

  ngAfterViewChecked(): void {
    // console.log(this.divAsContent);
  }
}
