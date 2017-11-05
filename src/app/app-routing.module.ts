import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkerComponent } from './workers/worker.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { AnimationsComponent } from './animations/animations.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'workers', component: WorkerComponent, loadChildren: './workers/workers.module#WorkersModule' },
            { path: 'toolbox', component: ToolboxComponent, loadChildren: './toolbox/toolbox.module#ToolboxModule' },
            { path: 'animations', component: AnimationsComponent, loadChildren: './animations/animations.module#AnimationsModule' }
        ])
    ],
    exports: [RouterModule],
    declarations: [WorkerComponent, ToolboxComponent, AnimationsComponent],
    providers: []
})
export class AppRoutingModule {

}
