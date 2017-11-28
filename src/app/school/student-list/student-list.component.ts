import { Component, OnInit } from '@angular/core';
import { SchoolService } from './../school.service';
import { IStudent } from './../interfaces/student.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { transformMenu } from '@angular/material/menu/typings/menu-animations';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  animations: [
    trigger('divClick', [
      state('0', style({ color: 'red', backgroundColor: '#f0f0f0' })),
      state('1', style({ color: 'black', marginTop: '10px', backgroundColor: '#ffffff' })),
      transition('void => 1', [
        style({ height: '0px' }),
        animate('300ms ease-out')]),
      transition('1 => void', [
        animate('300ms ease-out', style({ height: '0px', marginTop: '0' }))])
    ])
  ]
})
export class StudentListComponent implements OnInit {
  studentsList: Array<IStudent>;
  divStatus = '0';
  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.studentsList = this.getStudents();
  }

  getStudents() {
    return this.schoolService.getStudents();

  }
}
