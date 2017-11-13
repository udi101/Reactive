import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RouterModule } from '@angular/router';
import { StaggerComponent } from './stagger/stagger.component';
import { MatTabsModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleComponent } from './simple/simple.component';
import { AnimationsComponent } from './animations.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: '', component: AnimationsComponent, children: [
          { path: 'query', component: QueryComponent },
          { path: 'stagger', component: StaggerComponent },
          { path: 'simple', component: SimpleComponent }
        ]
      }
    ])
  ],
  declarations: [AnimationsComponent, QueryComponent, StaggerComponent, TabsComponent, SimpleComponent]
})
export class AnimationsModule { }
