class UploadAdapter {

  constructor(options) {
    this.options = options;
  }

  upload(file) {
    return new Promise((resolve, reject) => {
        this._initRequest();
        this._initListeners(resolve, reject, file);
        this._sendRequest(file);
      });
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open('POST', this.options.uploadUrl, true);
    xhr.responseType = 'json';
  }

  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText))
    xhr.addEventListener('abort', () => reject())
    xhr.addEventListener('load', async () => {
      const response = xhr.response

      if (!response || response.code != 0) {
        reject((response && response.msg) ?? genericErrorText);
      }

      resolve(response.data.url);
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          const loader = {}
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  _sendRequest(file) {
    const data = new FormData()
    data.append(this.options.field ?? 'file', file);
    this.xhr.send(data)
  }
}

export { UploadAdapter }
