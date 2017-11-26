import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { schoolRoutes } from './school.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(schoolRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class SchoolRoutingModule { }
