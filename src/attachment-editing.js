import { Plugin } from "@ckeditor/ckeditor5-core";

export default class AttachmentEditing extends Plugin {
    init() {
        // console.log('attachment editing init');

        this._defineSchema();
        this._defineConverters();
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.extend('$text', {
            allowAttributes: ['attachment']
        });
    }

    _defineConverters() {
		const conversion = this.editor.conversion;

        conversion.for('downcast').attributeToElement({
            model: 'attachment',
            view: (modelAttributeValue, conversionApi) => {
                const { writer } = conversionApi;

                return writer.createAttributeElement('a', {
                    href: modelAttributeValue
                });
            }
        });

        conversion.for('upcast').elementToAttribute({
            view: {
                name: 'a',
                attributes: ['href']
            },
            model: {
                key: 'attachment',
                value: viewElement => {
                    const href = viewElement.getAttribute('href');

                    return href;
                }
            }
        });
    }
}