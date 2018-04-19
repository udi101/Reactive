import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  students: Array<{ id: number, name: string }> = [];
  constructor() { }

  ngOnInit() {
    this.students =
     [
      { id: 1, name: 'Udi' },
      { id: 2, name: 'Mazal' },
      { id: 3, name: 'Alona' },
      { id: 4, name: 'Ella' }
    ];
  }

  updateList() {
    this.students = [
      { id: 1, name: 'Udi' },
      { id: 2, name: 'Mazal' },
      { id: 3, name: 'Alona' },
      { id: 4, name: 'Ella' },
      { id: 5, name: 'Avigail' },
      { id: 6, name: 'Erez' }
    ];
  }

  getId(id: number, item: any) {
    return item.id;
  }
}
