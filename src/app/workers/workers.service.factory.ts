import { WorkersService } from './workers.service';
import { Http } from '@angular/http';
export function workersServiceFactory(http: Http) {
    const workersService: WorkersService = new WorkersService(http);
    console.log('Dependancy Injection was done.');
    return workersService;
}



// ========================
// This is a factory of a service that is used to the useFactory provide method.
