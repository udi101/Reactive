import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFatherComponent } from './father/ui-father.component';
import { UiChildComponent } from './child/ui-child.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { DirectiveComponent } from './directives/directive.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { NgForComponent } from './ng-for/ng-for.component';

const routes: Routes = [{
  path: '', children: [
    { path: 'father', component: UiFatherComponent },
    { path: 'viewContainer', component: ViewContainerComponent },
    { path: 'directives', component: DirectiveComponent },
    { path: 'dynamic', component: DynamicComponent },
    { path: 'ngFor', component: NgForComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }

