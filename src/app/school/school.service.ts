import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IStudent } from './interfaces/student.interface';
import { IWorker } from '../workers/worker.interface';
import { tap, map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class SchoolService {
    ttr = new BehaviorSubject<string>('udi');
    $ttr = this.ttr.asObservable();

    constructor(private httpClient: HttpClient) { }
    changeName(name: string) { this.ttr.next(name); }

    getStudents(): Array<IStudent> {
        return studentList;
    }

    getStudentList() {
        return this.httpClient.get<Array<any>>('http://localhost:5000/api/Workers').pipe(
            map((student) => {
                const worker = <IWorker>{ firstName: 'udi' };
                return worker;
            })
        );
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
