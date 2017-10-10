import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.scss']
})
export class AddAddressesComponent implements OnInit {
  workersForm: FormGroup;
  workers: Array<string> = ['udi', 'mazal', 'ela'];
  get address(): FormArray {
    return <FormArray>this.workersForm.get('address');
  }
  constructor(private formBuilder: FormBuilder) {
  }

  buildAddress(): FormGroup {
    return this.formBuilder.group({
      addressType: 'home',
      street: '',
      streetNumber: [{ value: '' }, Validators.min(1)],
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
}
