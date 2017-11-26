import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkerComponent } from './workers/worker.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'workers', component: WorkerComponent, loadChildren: './workers/workers.module#WorkersModule' },
            { path: 'toolbox', component: ToolboxComponent, loadChildren: './toolbox/toolbox.module#ToolboxModule' },
            { path: 'animations', loadChildren: './animations/animations.module#AnimationsModule' },
            {path: 'school', loadChildren: './school/school.module#SchoolModule'}
        ])
    ],
    exports: [RouterModule],
    declarations: [WorkerComponent, ToolboxComponent],
    providers: []
})
export class AppRoutingModule {

}
