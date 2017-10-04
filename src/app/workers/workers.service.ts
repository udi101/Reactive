import { Injectable } from '@angular/core';
import { IWorker } from './worker.interface';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WorkersService {
    workers: Subject<Array<IWorker>> = new Subject<Array<IWorker>>();
    workers$ = this.workers.asObservable();

    constructor(private http: Http) { }
    // getWorkers() {
    //     ((x, y) => { setTimeout(() => { x.next(y); }, 1000); })(this.workers, workers);
    // }


    readWorkers() {
        return(this.http.get('assets/workers.json').map(response => <Array<IWorker>>response.json()));
    }

}


// const workers: Array<IWorker> = [
//     {
//         firstName: 'Udi', lastName: 'Mazor', salary: 25000, birthDate: new Date('1974-08-28 12:00:00'),
//         address: { country: 'Israel', city: 'Qiryat Ono', street: 'Levi Eshkol', building: 105 }
//     },
//     {
//         firstName: 'Mazal', lastName: 'Mazor', salary: 24000, birthDate: new Date('1985-04-04 12:00:00'),
//         address: { country: 'Israel', city: 'Qiryat Ono', street: 'Levi Eshkol', building: 105 }
//     },
//     {
//         firstName: 'Liat', lastName: 'Levi', salary: 12000, birthDate: new Date('1995-08-12 12:00:00'),
//         address: { country: 'Israel', city: 'Qiryat Ono', street: 'Levi Eshkol', building: 49 }
//     }
// ];


