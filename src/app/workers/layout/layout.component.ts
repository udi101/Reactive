import { Component, Input, OnInit, AfterViewInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdDirective } from './../../shared/directives/ad.directive';
import { TableItem } from './../tables/table-item.interface';
import { TableService } from './../tables/getTables.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @Input() tableItem: TableItem;
  @ViewChild(AdDirective) tableHost: AdDirective;

  constructor(private tableService: TableService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.tableItem = this.tableService.getTable();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tableItem.component);
    const viewContainerRef = this.tableHost.viewContainerRef;
    console.log(this.tableItem.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TableItem>componentRef.instance).data = this.tableItem.data;
  }
  ngOnDestroy() { }

}
