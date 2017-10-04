import { Component, OnInit } from '@angular/core';
import { IWorker } from './../worker.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function checkSalary(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value < 100 && c.value > 50000) {
    return { 'salary': false };
  } else { return null; }
}

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
      salary: [{ value: null, disabled: false }, checkSalary]
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
