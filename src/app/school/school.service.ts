import { Injectable, Inject } from '@angular/core';
import { IStudent } from './interfaces/student.interface';

@Injectable()
export class SchoolService {
    getStudents(): Array<IStudent> {
        return studentList;
    }
    insertStudent(student: IStudent) {
        studentList = studentList.concat(student);
    }
}



let studentList: Array<IStudent> = [
    { name: 'udi', last: 'mazor', age: 43, address: { street: 'Levi Eshkol', streetNumber: 105 } },
    { name: 'ella', last: 'fingrit', age: 32, address: { street: 'hashomer', streetNumber: 52 } },
];
