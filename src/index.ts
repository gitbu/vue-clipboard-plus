const Clipboard = require('clipboard/dist/clipboard.min.js');

enum ACTION_TYPE  {
  COPY = 'copy'
}

const copyText = (text: String, container?: Object) => {
  return new Promise((resolve, reject) => {
    const fakeElement = document.createElement('button');

    const clipboard = new Clipboard(fakeElement, {
      text() { return text },
      action() { return ACTION_TYPE.COPY },
      container: typeof container === 'object' ? container : document.body
    })

    clipboard.on('success', (e: Clipboard) => {
      clipboard.destroy();
      resolve(e);
    })

    clipboard.on('error', (e: Object) => {
      clipboard.destroy();
      reject(e)
    })

    document.body.appendChild(fakeElement);

    fakeElement.click();
    
    document.body.removeChild(fakeElement);

  })
}

const vueClipBoard = {
  install(app: any) {
    const isVue2 = typeof app === 'function';
    const isVue3 = typeof app === 'object';

    if (isVue2) app.prototype.$copyText = copyText;

    if (isVue3) app.config.globalProperties.$copyText = copyText;
  }
};

//@ts-ignore
global.vueClipBoard = vueClipBoard;

export default vueClipBoard;