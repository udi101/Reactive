import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SchoolService } from './school.service';
import { SchoolRoutingModule } from './school-routing.module';
import { NumberDirective } from './number.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    SchoolRoutingModule
    // RouterModule.forChild(schoolRoutes)
  ],
  declarations: [StudentListComponent, AddStudentComponent, NumberDirective],
  providers: [SchoolService]
})
export class SchoolModule { }
