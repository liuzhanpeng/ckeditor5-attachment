 import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
 import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
 import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
 import Heading from '@ckeditor/ckeditor5-heading/src/heading';
 import List from '@ckeditor/ckeditor5-list/src/list';
 import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
 import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

 import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

 import Attachment from './src/attachment';
 
 ClassicEditor
     .create( document.querySelector( '#editor' ), {
         plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, Attachment ],
         toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList', 'attachment' ],
         attachment: {
            uploadUrl: 'http://127.0.0.1:8787/admin/upload/attachment'
         }
     } )
     .then( editor => {
         console.log( 'Editor was initialized', editor );
         CKEditorInspector.attach( editor );
     } )
     .catch( error => {
         console.error( error.stack );
     } );