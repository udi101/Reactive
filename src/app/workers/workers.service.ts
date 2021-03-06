import { Injectable } from '@angular/core';
import { IWorker } from './worker.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { map, catchError, tap, filter, switchMap, first, last, take } from 'rxjs/operators';
import { of } from 'rxjs/';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/observable';



@Injectable()
export class WorkersService {
    workers: Subject<Array<IWorker>> = new Subject<Array<IWorker>>();
    workers$ = this.workers.asObservable();

    constructor(private http: HttpClient) { }


    readWorkers() {
        // const headers: HttpHeaders = new HttpHeaders({ status: 'test' });
        return this.http.get<Array<any>>('http://localhost:5000/api/workers').pipe(
            filter(d => d.some(x => x.firstName === 'udi')),
            switchMap(d => of(d)),
            tap((d) => { console.log(d); }),
            catchError(err => this.handleError(err))
        );
    }

    handleError(err: HttpErrorResponse): Observable<HttpErrorResponse> {
        return ErrorObservable.create(err);
    }
}


