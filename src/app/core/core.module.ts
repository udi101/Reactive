import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HeaderInterceptor } from './interceptors/addHeader.interceptor';
import { BooksService } from './books.service';
import { throwIfAlredyLoaded } from './module-import.gueard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BooksService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }   // Injecting an interceptor
  ]
})

export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule) {
    throwIfAlredyLoaded(parentModule, 'CoreModule');
  }
}
