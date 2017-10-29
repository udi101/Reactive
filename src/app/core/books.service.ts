import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  bestBook: string;
  constructor() { }

  setBook(bookName: string): void {
    if (bookName) {
      this.bestBook = bookName;
    }
  }
}
