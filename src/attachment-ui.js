import { Plugin } from "@ckeditor/ckeditor5-core";
import { ButtonView } from "@ckeditor/ckeditor5-ui";
import attachmentIcon from "./theme/icons/attachment.svg";
import './theme/attachment.css';
import { UploadAdapter } from "./uploader-adapter";


export default class AttachmentUI extends Plugin {
    init() {
        // console.log('attachment ui init');

        const editor = this.editor;
        const options = editor.config.get('attachment');

        editor.ui.componentFactory.add('attachment', (locale) => {
            const button = new ButtonView(locale);

            // const { t } = editor.locale;

            button.label = '上传附件';
            button.icon = attachmentIcon;
            button.tooltip = true;

            this.listenTo(button, 'execute', async () => {
                const file = await this._openFile();

                new UploadAdapter(options).upload(file)
                    .then(url => {
                        editor.model.change( writer => {
                            editor.model.insertContent(
                                writer.createText(file.name, {attachment: url})
                            );
                        });
                    })
                    .catch (error =>  {
                        alert('上传失败: ' + error);
                    });
            });

            return button;
        });
    }

    async _openFile() {
        return new Promise((resolve) => {
          const input = document.createElement('input');
          input.type = 'file';
          input.multiple = false;
          input.addEventListener('change', () => {
            resolve(input.files[0]);
          });
          input.click();
        })
      }
}