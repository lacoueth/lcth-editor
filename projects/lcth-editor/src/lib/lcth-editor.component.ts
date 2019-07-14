import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'lcth-editor',
  template: `
  <ckeditor [editor]="editor"
  [(ngModel)]="initialValue"
  (ngModelChange)="ngModelChange.emit($event)"
  [config]="config"></ckeditor>
  `,
  styles: []
})
export class LcthEditorComponent implements OnInit {

  @Input() initialValue: string;
  @Input() style: {
    'border-radius'?: string,
    'inner-shadow'?: string,
    'focus-color'?: string,
  };

  @Output() ngModelChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    document.documentElement.style.setProperty('--ck-border-radius', this.style && this.style['border-radius'] || '4px');
    console.log('setted border radius', document.documentElement.style);
    document.documentElement.style.setProperty('--ck-inner-shadow', 'none');
    document.documentElement.style.setProperty('--ck-color-base-border', '#d9d9d9');

    if (this.style && this.style['focus-color']) document.documentElement.style.setProperty('--ck-color-focus-border', this.style['focus-color']);
  }

  editor = ClassicEditor;

  config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        // 'imageUpload',
        // 'blockQuote',
        'insertTable',
        // 'mediaEmbed',
        'undo',
        'redo'
      ]
    },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        // { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
      ]
    },
    /* image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    }, */
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
  };

}
