const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  selectFilePreload: () => {
    return ipcRenderer.invoke('selectFileMain')
  },
  saveFilePreload: (val) => {
    return ipcRenderer.send('saveFileMain', val)
  },
})
