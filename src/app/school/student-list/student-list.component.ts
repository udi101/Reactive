import { Component, OnInit } from '@angular/core';
import { SchoolService } from './../school.service';
import {IStudent} from './../interfaces/student.interface';
import { getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentsList: Array<IStudent>;
  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.studentsList = this.getStudents();
  }

  getStudents() {
    return this.schoolService.getStudents();

  }
}
