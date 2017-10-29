import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { MatTableModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatInputModule, MatRadioModule } from '@angular/material';


// Components
import { ListComponent } from './list/list.component';
import { WorkersService } from './workers.service';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { AddAddressesComponent } from './add-addresses/add-addresses.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { workersServiceFactory } from './workers.service.factory';

// Services
import { WorkersGuard } from './add-addresses/gueard.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        HttpModule,
        MatTableModule,
        MatButtonModule,
        MatToolbarModule,
        MatRadioModule,
        MatMenuModule,
        MatInputModule,
        RouterModule.forChild([
            { path: 'list', component: ListComponent },
            { path: 'add-worker', component: AddWorkerComponent },
            { path: 'add-addresses', component: AddAddressesComponent, canDeactivate: [WorkersGuard] },
            { path: 'checkbox', component: CheckboxComponent }
        ])
    ],
    exports: [],
    declarations: [ListComponent, OrderbyPipe, AddWorkerComponent, AddAddressesComponent, CheckboxComponent],
    providers: [
        { provide: WorkersService, useFactory: workersServiceFactory, deps: [Http] },
        WorkersGuard]
})
export class WorkersModule {
}
