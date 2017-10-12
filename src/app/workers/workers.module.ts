import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Sharedodule } from './../shared/shared.module';
import { TableService } from './tables/getTables.service';
import { MatTableModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatInputModule, MatRadioModule } from '@angular/material';


// Components
import { ListComponent } from './list/list.component';
import { WorkersService } from './workers.service';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './tables/table/table.component';
import { CardsComponent } from './tables/cards/cards.component';
import { AddAddressesComponent } from './add-addresses/add-addresses.component';

// Services
import { WorkersGuard } from './add-addresses/gueard.service';

@NgModule({
    imports: [
        // FormsModule,
        CommonModule,
        Sharedodule,
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
            { path: 'layout', component: LayoutComponent }
        ])
    ],
    exports: [],
    declarations: [ListComponent, OrderbyPipe, AddWorkerComponent, LayoutComponent, TableComponent, CardsComponent, AddAddressesComponent],
    providers: [WorkersService, TableService, WorkersGuard],
    entryComponents: [TableComponent, CardsComponent]
})
export class WorkersModule {

}
