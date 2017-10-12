import { Injectable } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AddAddressesComponent } from './add-addresses.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkersGuard implements CanDeactivate<AddAddressesComponent> {
    canDeactivate(
        component: AddAddressesComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> {
        if (component.workersForm.dirty) {
            console.log(route.url[0]);
            return Observable.of(confirm('Form is dirty, Are you sure you want to leave?'));
        }
        return Observable.of(true);
    }
}
