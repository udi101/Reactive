import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { throwIfAlredyLoaded } from './module-import.gueard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [BooksService]
})

export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule) {
    throwIfAlredyLoaded(parentModule, 'CoreModule');
  }
}
