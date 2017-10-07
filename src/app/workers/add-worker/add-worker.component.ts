import { Component, OnInit } from '@angular/core';
import { IWorker } from './../worker.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

function checkSalary(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } => {
    if (c.value !== 'undefined' && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
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
      mailConfirmation: this.formBuildier.group({
        email: [{ value: '', disabled: false }, [Validators.required, Validators.pattern('[a-z0-9A-Z_.]{3,15}@[a-z0-9.]{3,15}')]],
        confirmEmail: ['', Validators.required]
      }),
      notification: 'email',
      salary: [{ value: null, disabled: false }, checkSalary(100, 50000)]
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
