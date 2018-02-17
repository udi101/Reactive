import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiChildComponent } from './child/ui-child.component';
import { UiFatherComponent } from './father/ui-father.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { ViewContainerComponent } from './view-container/view-container.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [
    UiFatherComponent,
    UiChildComponent,
    SelectorsComponent,
    ViewContainerComponent
  ]
})
export class UiModule { }