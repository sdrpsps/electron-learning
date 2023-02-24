const { app, ipcMain } = require('electron')
const { createWindow } = require('./window')
createWindow

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', () => {
  console.log('mainEvent')
})
