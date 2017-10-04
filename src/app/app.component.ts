import { Component, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private sampleScreenWidth = _.debounce((event) => this.checkWidth(event), 70, {});

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sampleScreenWidth(event);
  }
  checkWidth(event): void {
    console.log('Current width: ' + event.target.innerWidth);
    }
}
