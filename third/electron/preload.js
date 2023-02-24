const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  mainEvent: () => {
    ipcRenderer.send('mainEvent')
  },
  setWindowSize: (size) => {
    ipcRenderer.send('setWindowSize', size)
  },
})
