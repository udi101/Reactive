import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { IStudent } from './../interfaces/student.interface';
import { SchoolService } from './../school.service';
import { instantiateSupportedAnimationDriver } from '@angular/platform-browser/animations/src/providers';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private schoolService: SchoolService) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: { value: '', disabled: false },
        age: [{ value: 0, disabled: false }, [Validators.required, Validators.min(10), validateAge]]
      });
  }

  insertStudent() {
    let student: IStudent;
    student = Object.assign(<IStudent>this.studentForm.value);
    this.schoolService.insertStudent(student);
    console.log(student);

  }
}

function validateAge(c: AbstractControl): { [key: string]: string | null } {
  if (c.value === 30) {
    return { 'age': 'This is the wrong age' };
  } else { return null; }
}


