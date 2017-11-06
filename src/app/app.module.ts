import { BrowserModule } from '@angular/platform-browser';
import { NoConflictStyleCompatibilityMode } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';

// import { CKEditorModule } from 'ng2-ckeditor';


// Components
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    NoConflictStyleCompatibilityMode,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
