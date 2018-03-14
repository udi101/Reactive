import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { UiService } from './../ui.service';

@Component({
  selector: 'app-approval-dialog',
  templateUrl: './approval-dialog.component.html',
  styleUrls: ['./approval-dialog.component.scss']
})
export class ApprovalDialogComponent implements OnInit {
  @ViewChild('myName', { read: ElementRef }) _name: ElementRef;
  constructor(
    private dialogRef: MatDialogRef<ApprovalDialogComponent>,
    private uiService: UiService
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ name: 'mazor' });
  }

  changeService() {
    this.uiService.tt$.next(this._name.nativeElement.value);
  }
}
