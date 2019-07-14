import { NgModule } from '@angular/core';
import { LcthEditorComponent } from './lcth-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LcthEditorComponent],
  imports: [
    CKEditorModule,
    FormsModule
  ],
  exports: [
    LcthEditorComponent,
    CKEditorModule
  ]
})
export class LcthEditorModule { }
