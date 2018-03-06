import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiChildComponent } from './child/ui-child.component';
import { UiFatherComponent } from './father/ui-father.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { ClassSelectorDirective } from './directives/selector.directive';
import { DirectiveComponent } from './directives/directive.component';
import { RedDirective } from './directives/red.directive';
import { RandomColorDirective } from './hostbinding/random-color.directive';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [
    UiFatherComponent,
    UiChildComponent,
    SelectorsComponent,
    ViewContainerComponent,
    HostListenerComponent,
    ClassSelectorDirective,
    DirectiveComponent,
    RedDirective,
    RandomColorDirective
  ]
})
export class UiModule { }
