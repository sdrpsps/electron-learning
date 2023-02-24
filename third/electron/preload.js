const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  mainEvent: () => {
    ipcRenderer.send('mainEvent')
  },
})
