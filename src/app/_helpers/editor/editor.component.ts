import { Component, OnInit,EventEmitter,Input,Output, AfterViewInit, OnDestroy } from '@angular/core';
import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/codesample';

declare var tinymce: any;

@Component({
  selector: 'app-tiny-editor',
  template: '<textarea id="{{elementId}}"></textarea>'
})
export class EditorComponent implements AfterViewInit,OnDestroy {
  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();
 
  editor;
 
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'table','codesample'],
      skin_url: 'assets/skins/lightgray',
      toolbar: "codesample",
      codesample_languages: [
        {text: 'HTML/XML', value: 'markup'},
        {text: 'JavaScript', value: 'javascript'},
        {text: 'CSS', value: 'css'},
        {text: 'PHP', value: 'php'},
        {text: 'Ruby', value: 'ruby'},
        {text: 'Python', value: 'python'},
        {text: 'Java', value: 'java'},
        {text: 'C', value: 'c'},
        {text: 'C#', value: 'csharp'},
        {text: 'C++', value: 'cpp'}
      ],
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
