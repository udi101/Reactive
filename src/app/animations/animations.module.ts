import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RouterModule } from '@angular/router';
import { StaggerComponent } from './stagger/stagger.component';
// import { AnimationsComponent } from './animations.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'query', component: QueryComponent },
      { path: 'stagger', component: StaggerComponent }
    ])

  ],
  declarations: [QueryComponent, StaggerComponent]
})
export class AnimationsModule { }
