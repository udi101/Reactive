import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  navLinks: Array<any>;
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      { path: 'udi', label: 'mazor' },
      { path: 'ela', label: 'fingrit' },
    ]
  }

}

