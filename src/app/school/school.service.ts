import { Injectable, Inject } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IStudent } from './interfaces/student.interface';

@Injectable()
export class SchoolService {
    ttr = new BehaviorSubject<string>('udi');
    $ttr = this.ttr.asObservable();

    changeName(name: string) {this.ttr.next(name); }

    getStudents(): Array<IStudent> {
        return studentList;
    }

    insertStudent(student: IStudent) {
        studentList = studentList.concat(student);
    }
}

let studentList: Array<IStudent> = [
    { name: 'udi', last: 'mazor', age: 43, degrees: ['b.sc', 'b.a'], address: { street: 'Levi Eshkol', streetNumber: 105 } },
    { name: 'ella', last: 'fingrit', age: 32, address: { street: 'hashomer', streetNumber: 52 } },
    { name: 'avigail', last: 'mazor', age: 3, address: { street: 'Levi Eshkol', streetNumber: 95 } },
];
