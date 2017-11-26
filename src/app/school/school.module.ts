import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';

import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SchoolService } from './school.service';
import {SchoolRoutingModule} from './school-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    SchoolRoutingModule
    // RouterModule.forChild(schoolRoutes)
  ],
  declarations: [StudentListComponent, AddStudentComponent],
  providers: [SchoolService]
})
export class SchoolModule { }
