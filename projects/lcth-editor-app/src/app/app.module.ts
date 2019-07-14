import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LcthEditorModule } from 'lcth-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    LcthEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
