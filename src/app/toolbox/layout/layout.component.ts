import { Component, Input, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdDirective } from './../../shared/directives/ad.directive';
import { TableItem } from './../tables/table-item.interface';
import { TableService } from './../tables/getTables.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input() tableComponent: TableItem;
  @ViewChild(AdDirective) tableHost: AdDirective;

  constructor(private tableService: TableService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.tableComponent = this.tableService.getTable();   // the component and data
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tableComponent.component);
    const viewContainerRef = this.tableHost.viewContainerRef;
    console.log(this.tableComponent.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TableItem>componentRef.instance).data = this.tableComponent.data;
  }
  ngOnDestroy() { }

}
