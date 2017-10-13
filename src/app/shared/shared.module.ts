import { NgModule } from '@angular/core';

import { RedDirective } from './directives/red.directive';
import { AdDirective } from './directives/ad.directive';

@NgModule({
    imports: [],
    exports: [RedDirective, AdDirective],
    declarations: [RedDirective, AdDirective],
    providers: []
})
export class SharedModule {

}
