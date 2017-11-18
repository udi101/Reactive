import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CssAnimationsComponent } from './css-animations/css-animations.component';


@Injectable()
export class ExitCss implements CanDeactivate<CssAnimationsComponent> {
    canDeactivate(
        component: CssAnimationsComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return confirm('Are you sure you want to leave this page?');
    }
}
