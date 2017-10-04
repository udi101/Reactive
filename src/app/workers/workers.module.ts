import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Sharedodule } from './../shared/shared.module';
import { TableService } from './tables/getTables.service';
import { MdTableModule, MdButtonModule, MdToolbarModule, MdMenuModule, MatInputModule, MdRadioModule } from '@angular/material';


// Components
import { ListComponent } from './list/list.component';
import { WorkersService } from './workers.service';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './tables/table/table.component';
import { CardsComponent } from './tables/cards/cards.component';


@NgModule({
    imports: [
        CommonModule,
        Sharedodule,
        ReactiveFormsModule,
        HttpModule,
        MdTableModule,
        MdButtonModule,
        MdToolbarModule,
        MdRadioModule,
        MdMenuModule,
        MatInputModule,
        RouterModule.forChild([
            { path: 'list', component: ListComponent },
            { path: 'add-worker', component: AddWorkerComponent },
            { path: 'layout', component: LayoutComponent }
        ])
    ],
    exports: [],
    declarations: [ListComponent, OrderbyPipe, AddWorkerComponent, LayoutComponent, TableComponent, CardsComponent],
    providers: [WorkersService, TableService],
    entryComponents: [TableComponent, CardsComponent]
})
export class WorkersModule {

}
