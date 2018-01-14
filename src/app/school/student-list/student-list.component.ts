import { Component, OnInit } from '@angular/core';
import { SchoolService } from './../school.service';
import { IStudent } from './../interfaces/student.interface';
import { divClick } from './student-list.animations';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  animations: [divClick]
})
export class StudentListComponent implements OnInit {
  studentsList: Array<IStudent>;
  private _ttr: string;
  set ttr(val: string) { this.changeName(val); }
  get ttr() { return this._ttr; }
  date: Date;
  dateFormat = 'dd/MM/yyyy';

  divStatus = '0';
  constructor(public schoolService: SchoolService) { }

  ngOnInit() {
    this.studentsList = this.getStudents();
    this.schoolService.ttr.subscribe(ttr => this._ttr = ttr);
    this.date = new Date(Date.now());
    localStorage.setItem('dateFormat', 'dd/MM/yy');
  }

  getStudents() {
    return this.schoolService.getStudents();
  }

  setName(name: string) {
    this.ttr = name;
    // this.changeName(name);
  }
  changeName(name: string) {
    this.schoolService.changeName(name);
  }
}
