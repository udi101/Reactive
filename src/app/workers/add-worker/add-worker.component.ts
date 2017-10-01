import { Component, OnInit } from '@angular/core';
import { IWorker } from './../worker.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      notification: 'email',
      salary: [{ value: null, disabled: false }]
    });
  }

  setValues() {
    this.workersForm.patchValue({
      firstName: 'Udi',
      lastName: 'Mazor',
      salary: 25000
    });
  }
  save() {
    // console.log('Saved: ' + this.workersForm);
  }

  submit() {
    console.log(this.workersForm.value);
  }
}
