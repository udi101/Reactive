import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UiService {

  tt$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() {
    this.tt$.subscribe(val => console.log('updated from servie ' + val));
  }

}
