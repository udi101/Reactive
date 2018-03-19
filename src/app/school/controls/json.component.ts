import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'jsonInput',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JsonComponent),
      multi: true
    }
  ]
})
export class JsonComponent implements OnInit, ControlValueAccessor {


  jsonString: string;
  parseError: string;
  data: any;

  propogateChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }

  onChange(e) {
    this.propogateChange(e.target.value);
  }

  writeValue(obj: any): void {
    if (obj) {
      this.data = obj;
      this.jsonString = JSON.stringify(this.data, undefined, 4);
    }
  }

  registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
}
