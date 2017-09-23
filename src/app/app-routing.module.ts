import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkerComponent } from './workers/worker.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'workers', component: WorkerComponent, loadChildren: './workers/workers.module#WorkersModule' }
        ])
    ],
    exports: [RouterModule],
    declarations: [WorkerComponent],
    providers: []
})
export class AppRoutingModule {

}
