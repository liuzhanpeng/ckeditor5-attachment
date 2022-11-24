import { Plugin } from "@ckeditor/ckeditor5-core";
import AttachmentUI from "./attachment-ui";
import AttachmentEditing from "./attachment-editing";

export default class Attachment extends Plugin {
    static get requires() {
        return [AttachmentEditing, AttachmentUI];
    }
}