import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit, OnChanges {
  @Input() names: Array<string>;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges() {
    console.log(this.names);
  }
  ngOnInit() {
    console.log(this.names);
  }
  changeNames() {
    // this.names = [].concat(this.names, 'Ella');
    this.names.push('Ella');
  }
}
