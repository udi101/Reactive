import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './tables/table/table.component';
import { CardsComponent } from './tables/cards/cards.component';

// Services
import { TableService } from './tables/getTables.service';
import { TypescriptComponent } from './typescript/typescript.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'layout', component: LayoutComponent },
      { path: 'typescript', component: TypescriptComponent },
      { path: 'typescript/:id', component: TypescriptComponent }
    ])
  ],
  declarations: [
    LayoutComponent,
    TableComponent,
    CardsComponent,
    TypescriptComponent
  ],
  providers: [
    { provide: TableService, useClass: TableService }
  ],
  entryComponents: [TableComponent, CardsComponent]
})
export class ToolboxModule { }
