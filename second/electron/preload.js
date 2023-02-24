const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', {
  updateH1: (callback) => {
    ipcRenderer.on('test', (event, value) => {
      callback(value)
    })
  },
  upload: async (callback) => {
    const file = await ipcRenderer.invoke('selectFile')
    callback(file)
  },
})
