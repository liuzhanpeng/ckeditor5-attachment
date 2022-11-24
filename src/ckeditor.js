 import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
 import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
 import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
 import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
 import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
 import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
 import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
 import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
 import DataFilter from "@ckeditor/ckeditor5-html-support/src/datafilter.js";
 import DataSchema from "@ckeditor/ckeditor5-html-support/src/dataschema.js";
 import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
 import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
 import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
 import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
 import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
 import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
 import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js";
 import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
 import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
 import HtmlComment from "@ckeditor/ckeditor5-html-support/src/htmlcomment.js";
 import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed.js";
 import Image from "@ckeditor/ckeditor5-image/src/image.js";
 import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
 import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
 import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
 import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
 import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
 import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
 import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
 import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
 import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
 import Link from "@ckeditor/ckeditor5-link/src/link.js";
 import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage.js";
 import List from "@ckeditor/ckeditor5-list/src/list.js";
 import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties.js";
 // import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js'
 import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
 import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
 import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
 import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
 import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
 import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
 import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
 import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting.js";
 import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
 import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js";
 import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js";
 import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
 import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js";
 import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js";
 import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
 import Table from "@ckeditor/ckeditor5-table/src/table.js";
 import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption.js";
 import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
 import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize.js";
 import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
 import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
 import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage.js";
 import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
 // import Title from '@ckeditor/ckeditor5-heading/src/title.js'
 import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
 import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
 import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
 
 import Attachment from "./attachment";
 
 class Editor extends ClassicEditor {}
 
 Editor.defaultConfig = {
   plugins: [
     Attachment,
     Alignment,
     Autoformat,
     AutoImage,
     AutoLink,
     BlockQuote,
     Bold,
     CodeBlock,
     DataFilter,
     DataSchema,
     Essentials,
     FindAndReplace,
     FontBackgroundColor,
     FontColor,
     FontFamily,
     FontSize,
     GeneralHtmlSupport,
     Heading,
     Highlight,
     HtmlComment,
     HtmlEmbed,
     Image,
     ImageCaption,
     ImageInsert,
     ImageResize,
     ImageStyle,
     ImageToolbar,
     ImageUpload,
     Indent,
     IndentBlock,
     Italic,
     Link,
     LinkImage,
     List,
     ListProperties,
     // Markdown,
     MediaEmbed,
     MediaEmbedToolbar,
     Mention,
     Paragraph,
     PasteFromOffice,
     RemoveFormat,
     SimpleUploadAdapter,
     SourceEditing,
     SpecialCharacters,
     SpecialCharactersArrows,
     SpecialCharactersCurrency,
     SpecialCharactersEssentials,
     SpecialCharactersMathematical,
     SpecialCharactersText,
     Strikethrough,
     Table,
     TableCaption,
     TableCellProperties,
     TableColumnResize,
     TableProperties,
     TableToolbar,
     TextPartLanguage,
     TextTransformation,
     // Title,
     TodoList,
     Underline,
     WordCount
   ],
   toolbar: {
     items: [
       "heading",
       "textPartLanguage",
       "|",
       "alignment",
       "outdent",
       "indent",
       "|",
       "numberedList",
       "bulletedList",
       "todoList",
       "bold",
       "italic",
       "strikethrough",
       "underline",
       "highlight",
       "specialCharacters",
       "fullscreen",
       "|",
       "link",
       "blockQuote",
       "insertTable",
       "imageInsert",
       "mediaEmbed",
       "attachment",
       "codeBlock",
       "|",
       "findAndReplace",
       "fontFamily",
       "fontBackgroundColor",
       "fontColor",
       "fontSize",
       "removeFormat",
       "htmlEmbed",
       "sourceEditing",
       "undo",
       "redo",
     ],
   },
   extraPlugins: [customImageUploadPlugin],
   language: "zh-cn",
   image: {
     toolbar: [
       "imageTextAlternative",
       "imageStyle:inline",
       "imageStyle:block",
       "imageStyle:side",
       "linkImage",
     ],
   },
   table: {
     contentToolbar: [
       "tableColumn",
       "tableRow",
       "mergeTableCells",
       "tableCellProperties",
       "tableProperties",
     ],
   },
   attachment: {
     uploadUrl: "http://localhost:5000/file/addFile",
   },
   htmlSupport: {
     allow: [
       {
         name: /.*/,
         attributes: true,
         classes: true,
         styles: true,
       },
     ],
   },
   htmlEmbed: {
     showPreviews: true,
     sanitizeHtml: (inputHtml) => {
       // Strip unsafe elements and attributes, e.g.:
       // the `<script>` elements and `on*` attributes.
       // const outputHtml = sanitize(inputHtml)
 
       return {
         html: inputHtml, //outputHtml,
         // true or false depending on whether the sanitizer stripped anything.
         hasChanged: true,
       };
     },
   },
 };
 
 export default Editor;
 