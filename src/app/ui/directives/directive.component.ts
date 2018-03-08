import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Debounce } from 'lodash-decorators';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  constructor(private renderer2: Renderer2) { }
  @Debounce(500)
  @HostListener('document:click', ['$event']) log(evt: MouseEvent) {
    this.logger(<MouseEvent>evt);
  }

  ngOnInit() {
  }

  addLink(event: MouseEvent) {
    const link = <HTMLAnchorElement>this.renderer2.createElement('a');
    link.href = 'javascript:alert("hello")';
    const txt: HTMLElement = this.renderer2.createText('Click Me');
    link.appendChild(txt);
    const parent = this.renderer2.parentNode(event.target);
    this.renderer2.appendChild(parent, link);
  }

  selectRootElement(evt: MouseEvent) {
    this.renderer2.selectRootElement(evt.target);
  }


  logger(evt: MouseEvent) {
    console.log('Clicked: (' + evt.screenX + ',' + evt.screenY + ')');
  }

  handleClick(evt: MouseEvent) {
    console.log('This is directive Event', evt);
    evt.cancelBubble = true;
  }
}
