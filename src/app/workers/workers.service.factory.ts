import { WorkersService } from './workers.service';
import { HttpClient  } from '@angular/common/http';
export function workersServiceFactory(httpClient: HttpClient) {
    const workersService: WorkersService = new WorkersService(httpClient);
    console.log('Dependancy Injection was done.');
    return workersService;
}



// ========================
// This is a factory of a service that is used to the useFactory provide method.
