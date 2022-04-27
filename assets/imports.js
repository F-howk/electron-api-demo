const links = document.querySelectorAll('link[rel="import"]')
// Import and add each page to the DOM
Array.prototype.forEach.call(links,async (link) => {
  let linkUrl = link.href;
  let template = await (await fetch(linkUrl)).text();
  template = template.replace(/task-template/g,"task-div");
  template = template.replace(/template/g,"div");
  template = template.replace(/task-div/g,"task-template");
  // let template = link.import.querySelector('.task-template')
  // let clone = document.importNode(template.content, true)
  let clone = template
  if (link.href.match('about.html')) {
    // document.querySelector('body').appendChild(clone)
    document.querySelector('body').innerHTML += clone;
  } else {
    // document.querySelector('.content').appendChild(clone)
    document.querySelector('.content').innerHTML += clone;
  }
})
setTimeout(()=>{
  require('../renderer-process/windows/create-window')
  require('../renderer-process/windows/manage-window')
  require('../renderer-process/windows/using-window-events')
  require('../renderer-process/windows/frameless-window')
  require('../renderer-process/windows/process-crash')
  require('../renderer-process/windows/process-hang')
  require('../renderer-process/system/app-information')
  require('../renderer-process/system/version-information')
  require('../renderer-process/system/sys-information')
  require('../renderer-process/system/screen-information')
  require('../renderer-process/system/copy')
  require('../renderer-process/system/paste')
  require('../renderer-process/system/protocol-handler')
  require('../renderer-process/menus/context-menu')
  require('../renderer-process/native-ui/dialogs/open-file')
  require('../renderer-process/native-ui/dialogs/error')
  require('../renderer-process/native-ui/dialogs/information')
  require('../renderer-process/native-ui/dialogs/save')
  require('../renderer-process/native-ui/drag/drag')
  require('../renderer-process/native-ui/ex-links-file-manager/file-manager')
  require('../renderer-process/native-ui/ex-links-file-manager/ex-links')
  require('../renderer-process/native-ui/notifications/basic-notification')
  require('../renderer-process/native-ui/notifications/advanced-notification')
  require('../renderer-process/native-ui/tray/tray')
  require('../renderer-process/communication/sync-msg')
  require('../renderer-process/communication/async-msg')
  require('../renderer-process/communication/invisible-msg')
  require('../renderer-process/media/desktop-capturer')
},300)