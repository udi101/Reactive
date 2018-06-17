import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule, CanDeactivate } from '@angular/router';
import { StaggerComponent } from './stagger/stagger.component';
import { MatTabsModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleComponent } from './simple/simple.component';
import { CssAnimationsComponent } from './css-animations/css-animations.component';
import { BananaboxComponent } from './bananabox/bananabox.component';
import { ExitCss } from './router.guard';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', children: [
          { path: 'query', component: QueryComponent },
          { path: 'stagger', component: StaggerComponent },
          { path: 'simple', component: SimpleComponent },
          { path: 'css_animations', component: CssAnimationsComponent, canDeactivate: [ExitCss] }
        ]
      }
    ])
  ],
  declarations: [
    QueryComponent, StaggerComponent, TabsComponent,
    SimpleComponent, CssAnimationsComponent, BananaboxComponent, ChangeDetectionComponent],
  providers: [ExitCss]
})
export class AnimationsModule { }
