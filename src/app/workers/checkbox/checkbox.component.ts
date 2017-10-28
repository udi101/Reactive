import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupName, FormControlName, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkboxForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.checkboxForm = this.formBuilder.group(
      { gender: '' }
    );
    const tt: Date = new Date('2017-10-28T20:43:45.600Z');
    console.log(tt.getDay() + '/' + tt.getMonth() + '/' + tt.getFullYear());
  }

  ngOnInit() {
  }
}
