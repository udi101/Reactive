import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { RedDirective } from './directives/red.directive';
import { AdDirective } from './directives/ad.directive';

@NgModule({
    imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule],
    exports: [RedDirective, AdDirective, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule],
    declarations: [RedDirective, AdDirective],
    providers: []
})
export class SharedModule {

}
