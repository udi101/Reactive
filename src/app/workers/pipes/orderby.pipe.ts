import { Pipe, PipeTransform } from '@angular/core';
import { IWorker } from './../worker.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {
  transform(value: Array<IWorker>, args?: any): Array<IWorker> {
    if (value) {
      console.log('this is ', args);
      return value.sort((x, y) => x.firstName > y.firstName ? 1 :
        x.firstName === y.firstName ? 0 : -1);
    } else { return (null); }
  }
}
