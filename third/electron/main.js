const { app, ipcMain, BrowserWindow, screen } = require('electron')
const { createWindow } = require('./window')
createWindow

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', () => {
  console.log('mainEvent')
})

ipcMain.on('setWindowSize', (event, size) => {
  const workAreaSize = screen.getPrimaryDisplay().workAreaSize
  const x = Math.floor(workAreaSize.width / 2 - size.width / 2)
  const y = Math.floor(workAreaSize.height / 2 - size.height / 2)
  const win = BrowserWindow.fromWebContents(event.sender)
  win.setBounds(
    {
      ...size,
      x,
      y,
    },
    true,
  )
  win.title = `W: ${size.width}, H: ${size.height} X: ${x} Y: ${y}`
})
