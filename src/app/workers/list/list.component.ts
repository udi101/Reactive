import { Component, OnInit } from '@angular/core';
import { WorkersService } from './../workers.service';
import { IWorker } from './../worker.interface';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  workers: Array<IWorker>;
  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.readWorkers().subscribe(
      (data) => { this.workers = <Array<IWorker>>data; }
    );
  }
}

