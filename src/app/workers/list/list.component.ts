import { Component, OnInit } from '@angular/core';
import { WorkersService } from './../workers.service';
import { IWorker } from './../worker.interface';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  workersDataSource: WorkersDataSource;
  workers: Array<IWorker>;
  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.readWorkers().subscribe(
      data => this.workers = <Array<IWorker>>data
    );

    // this.workersDataSource = new WorkersDataSource(this.workersService);

    // this.workersService.workers$.subscribe(
    //   workers => {
    //     this.workers = workers;
    //   }
    // );
    // this.workersService.getWorkers();

  }

  readWorkers() {
    this.workersService.readWorkers().subscribe(data => console.log(data));
  }
}


export class WorkersDataSource extends DataSource<any> {
  constructor(private workersService: WorkersService) {
    super();
  }
  connect(): Observable<Array<IWorker>> {
    return Observable.of(null);
    // return this.workersService.workers$;
  }
  disconnect() { }
}
