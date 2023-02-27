const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  mainEvent: () => {
    ipcRenderer.send('mainEvent')
  },
  menuEvent: (callback) => {
    ipcRenderer.on('toPreload', (event, val) => {
      callback(val)
    })
  },
})

window.addEventListener('contextmenu', () => {
  ipcRenderer.send('mainPopMenu')
})
