const { app, ipcMain, BrowserWindow } = require('electron')
const { createWindow } = require('./window')
const { createMenu } = require('./menu')
require('./contextMenu')

app.whenReady().then(() => {
  const win = createWindow()
  createMenu(win)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0 && process.platform === 'darwin') {
    createWindow()
  }
})

ipcMain.on('mainEvent', () => {
  console.log('IPC按钮触发')
})
