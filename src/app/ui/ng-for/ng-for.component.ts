import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit, AfterViewInit {
  students: Array<{ id: number, name: string }> = [];
  @ViewChildren('student') studentList: QueryList<ElementRef>;
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


  ngAfterViewInit() {
    console.log(this.studentList.first.nativeElement.innerHTML);
    const studentListArray: Array<ElementRef> = this.studentList.toArray();
    console.log(studentListArray[1].nativeElement.innerHTML);
    this.studentList.changes.subscribe(s => console.log(s));
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
