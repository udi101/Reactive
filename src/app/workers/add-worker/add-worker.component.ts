import { Component, OnInit } from '@angular/core';
import { IWorker } from './../worker.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {
  workersForm: FormGroup;
  worker: IWorker;
  salaryMessage: string;

  private validationMessages: { [key: string]: string } = {
    required: 'You must enter a salary',
    range: 'The value entered does not follow the correct pattern'
  };

  // firstName: FormControl = new FormControl();
  constructor(private formBuildier: FormBuilder) { }



  ngOnInit() {
    this.workersForm = this.formBuildier.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      mailConfirmation: this.formBuildier.group({
        email: [{ value: '', disabled: false }, [Validators.required, Validators.pattern('[a-z0-9A-Z_.]{3,15}@[a-z0-9.]{3,15}')]],
        repeatEmail: ['', Validators.required],
      }, { validator: emailMatcer }),
      notification: 'email',
      salary: [{ value: null, disabled: false }, [Validators.required, checkSalary(100, 50000)]]
    });

    // listening to email valueChanges
    this.workersForm.get('notification').valueChanges.subscribe(val => {
      switch (val) {
        case 'text':
          const wf = this.workersForm.controls.mailConfirmation;
          wf.clearValidators();
          this.workersForm.get('mailConfirmation.email').clearValidators();
          wf.get('email').updateValueAndValidity();
          break;
        case 'email':
          console.log('email');
          break;
      }
    });

    // Adding a watch for salary control
    const salaryControl = this.workersForm.get('salary');
    salaryControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(salaryControl));
  }

// Setting the error messages for salaryMessage
  setMessage(c: AbstractControl): void {
    this.salaryMessage = '';
    if ((c.dirty || c.touched) && c.errors) {
      this.salaryMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(',');
    }
  }

  setValues() {
    this.workersForm.patchValue({
      firstName: 'Udi',
      lastName: 'Mazor',
      salary: 25000,
      email: 'udimaz@gmail.com'
    });
  }
  save() {
  }

  submit() {
    console.log(this.workersForm.value);
  }
}



function emailMatcer(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.get('email').value === c.get('repeatEmail').value) { return null; }
  return { 'emailsMatch': true };
}

function checkSalary(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } => {
    if (c.value !== 'undefined' && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}
