const { app, BrowserWindow, ipcMain } = require('electron')
const { createWindow } = require('./window')
const { createMenu } = require('./menu')
require('./ipcMain')

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
  if (process.platform === 'darwin' && BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
