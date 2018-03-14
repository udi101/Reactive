import { Component, OnInit, ViewChild, ElementRef, Renderer2, ApplicationRef } from '@angular/core';
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

  changeService() {
    this.uiService.tt$.next('udi');
  }
}
