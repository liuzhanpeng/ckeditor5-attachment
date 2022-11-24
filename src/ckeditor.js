import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import DataFilter from "@ckeditor/ckeditor5-html-support/src/datafilter";
import DataSchema from "@ckeditor/ckeditor5-html-support/src/dataschema";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import HtmlComment from "@ckeditor/ckeditor5-html-support/src/htmlcomment";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical";
import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";

import Attachment from './attachment';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
    Attachment,
	Essentials,
	UploadAdapter,
    SimpleUploadAdapter,
    Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	Table,
	TableToolbar,
	TextTransformation,
    Alignment,
    AutoImage,
    AutoLink,
    CodeBlock,
    DataFilter,
    DataSchema,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Highlight,
    HtmlComment,
    HtmlEmbed,
    ImageInsert,
    ImageResize,
    IndentBlock,
    LinkImage,
    ListProperties,
    MediaEmbedToolbar,
    Mention,
    RemoveFormat,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TextPartLanguage,
    TodoList,
    Underline,
    WordCount
];

ClassicEditor.defaultConfig = {
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
		]
	},
    removePlugins: ["MediaEmbedToolbar"],
    language: "zh-cn",
    fontFamily: {
        options: [
            'default',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif'
        ],
        supportAllValues: true
    },
    fontSize: {
        options: [ 10, 12, 14, 'default', 18, 20, 22 ],
        supportAllValues: true
    },
	image: {
        toolbar: [
            'imageStyle:alignLeft', 
            'imageStyle:alignRight', 
            'imageStyle:alignCenter',
            'toggleImageCaption',
            'imageTextAlternative',
            'linkImage',
          ],
	},
	table: {
        tableProperties: {
            defaultProperties: {
                width: '100%'
            }
        },
        contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
          ],
	},
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    indentBlock: {
        offset: 1,
        unit: 'em'
    },
    simpleUpload: {
        uploadUrl: ''
    },
    attachment: {
        uploadUrl: ''
    },
    htmlSupport: {
        allow: [{
            name: /.*/,
            attributes: true,
            classes: true,
            styles: true,
        }]
    },
    htmlEmbed: {
        showPreviews: true,
        sanitizeHtml: (inputHtml) => {
          return {
            html: inputHtml,
            hasChanged: true,
          };
        }
    },
    mediaEmbed: {
        providers: [
            {
                name: 'media',
                url: /^.*/
            }
        ]
    }
}