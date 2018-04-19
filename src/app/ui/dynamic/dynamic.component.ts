import { Component, OnInit, ViewChild, ElementRef, Renderer2, ApplicationRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ApprovalDialogComponent } from '../dialogs/approval-dialog.component';
import { UiService } from './../ui.service';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  @ViewChild('myName') name: ElementRef;
  @ViewChild('ttr', { read: TemplateRef }) ttr;
  @ViewChild('ttr', { read: ViewContainerRef }) ttrContainer;
  constructor(
    private dialog: MatDialog,
    private uiService: UiService,
    private r2: Renderer2,
    private app: ApplicationRef
  ) { }

  ngOnInit() {
    this.uiService.tt$.subscribe(x => {
      console.log('subscriber was catched, value is: ' + x);
      // this.r2.setAttribute(this.name.nativeElement, 'value', x);
      this.name.nativeElement.value = x;
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ApprovalDialogComponent, { width: '500px', height: '400px', data: { name: 'udi' } });
    dialogRef.afterClosed().subscribe(x => { console.log(x); });
    // this.app.tick();
  }
  getContext() {
    return { bike: 'KLR650A', $implicit: 'This is implicit contect that is returned dynamically' };
  }

  changeService() {
    this.uiService.tt$.next('udi');
  }
  toggleTemplate(): TemplateRef<any> {
    return this.ttr;
  }

}
