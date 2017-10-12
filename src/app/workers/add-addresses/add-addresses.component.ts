import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CommonValidators } from './../../shared/validators';

@Component({
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.scss']
})
export class AddAddressesComponent implements OnInit {
  workersForm: FormGroup;
  get address(): FormArray {
    return <FormArray>this.workersForm.get('address');
  }
  constructor(private formBuilder: FormBuilder) {
  }

  buildAddress(): FormGroup {
    return this.formBuilder.group({
      addressType: 'home',
      street: '',
      streetNumber: [{ value: '' }, CommonValidators.rangeValidator(2, 15)],
      city: ''
    });
  }
  ngOnInit() {
    this.workersForm = this.formBuilder.group({
      address: <FormArray>this.formBuilder.array([this.buildAddress()])
    });
  }

  // Adding another address
  addAddress(): void {
    this.address.push(this.buildAddress());
  }
  showStreetErrors(): boolean {
    const c: AbstractControl = this.workersForm.get('address.0.streetNumber');
    console.log('The c VAlue is: ' + JSON.stringify(c.value));
    return !!(c.dirty && c.value !== null && c.errors && c.errors['range'] !== 'undefined');
  }
}
