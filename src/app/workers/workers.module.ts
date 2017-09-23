import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MdTableModule, MdButtonModule, MdToolbarModule, MdMenuModule } from '@angular/material';


// Components
import { ListComponent } from './list/list.component';
import { WorkersService } from './workers.service';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { AddWorkerComponent } from './add-worker/add-worker.component';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdTableModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
        RouterModule.forChild([
            { path: 'list', component: ListComponent },
            { path: 'add-worker', component: AddWorkerComponent }
        ])
    ],
    exports: [],
    declarations: [ListComponent, OrderbyPipe, AddWorkerComponent],
    providers: [WorkersService]
})
export class WorkersModule {

}
