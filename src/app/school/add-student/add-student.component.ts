import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { IStudent } from './../interfaces/student.interface';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  frmStudent: FormGroup;
  get degrees() {
    const tt: FormArray = <FormArray>this.frmStudent.get('degrees');
    return tt.controls;
  }

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createStudentForm();
  }

  degreeBuilder(): FormControl {
    return this.formBuilder.control('');
  }

  addDegree() {
    this.degrees.push(this.degreeBuilder());
  }

  createStudentForm() {
    this.frmStudent = this.formBuilder.group(
      {
        name: ['', Validators.required],
        last: ['', Validators.required],
        age: ['', [Validators.min(10), Validators.max(100)]],
        jsonControl: '',
        degrees: <FormArray>this.formBuilder.array([this.degreeBuilder()])
      });
  }

  addStudent() {
    console.log(this.frmStudent.value);
  }
}




