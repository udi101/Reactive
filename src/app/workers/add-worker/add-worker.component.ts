import { Component, OnInit } from '@angular/core';
import { IWorker } from './../worker.interface';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {
  workersForm: FormGroup;
  worker: IWorker;
  // firstName: FormControl = new FormControl();
  constructor(private formBuildier: FormBuilder) { }

  ngOnInit() {
    this.workersForm = this.formBuildier.group({
      firstName: '',
      lastName: '',
      salary: [{ value: null, disabled: true }]
    });
    // this.workersForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   salary: new FormControl()
    // });
  }

  setValues() {
    this.workersForm.setValue({
      firstName: 'Udi',
      lastName: 'Mazor',
      salary: 25000
    });
  }
  save() {
    // console.log('Saved: ' + this.workersForm);
  }
}
