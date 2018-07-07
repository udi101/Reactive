import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SchoolService } from './school.service';
import { SchoolRoutingModule } from './school-routing.module';
import { NumberDirective } from './number.directive';
import { JsonComponent } from './controls/json.component';
import { HttpclientModule } from '../httpclient/httpclient.module';


@NgModule({
  imports: [
    CommonModule,
    HttpclientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    SchoolRoutingModule
    // RouterModule.forChild(schoolRoutes)
  ],
  declarations: [StudentListComponent, AddStudentComponent, NumberDirective, JsonComponent],
  providers: [SchoolService]
})
export class SchoolModule { }
