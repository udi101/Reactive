import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { UiRoutingModule } from './ui-routing.module';
import { UiChildComponent } from './child/ui-child.component';
import { UiFatherComponent } from './father/ui-father.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { ClassSelectorDirective } from './directives/selector.directive';
import { DirectiveComponent } from './directives/directive.component';
import { RedDirective } from './directives/red.directive';
import { RandomColorDirective } from './host-binding/random-color.directive';
import { SetActiveDirective } from './host-binding/set-active.directive';
import { SetValueDirective } from './host-binding/set-value.directive';
import { ClickListenerDirective } from './host-listener/click-listener.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ApprovalDialogComponent } from './dialogs/approval-dialog.component';
import { UiService } from './ui.service';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
    RandomColorDirective,
    SetActiveDirective,
    SetValueDirective,
    ClickListenerDirective,
    DynamicComponent,
    ApprovalDialogComponent,
    NgForComponent
  ],
  entryComponents: [ApprovalDialogComponent],
  providers: [UiService]
})
export class UiModule { }
