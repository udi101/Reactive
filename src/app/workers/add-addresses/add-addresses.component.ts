import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.scss']
})
export class AddAddressesComponent implements OnInit {
  workersForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.workersForm = this.formBuilder.group({
      addressType: '',
      street: '',
      streetNumber: [{ value: '' }, Validators.min(1)],
      city:''
    });
  }

  ngOnInit() {
  }

}
