const { ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const { createMenu } = require('./menu')

// 打开渲染进程
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true, // 窗口置顶
    x: 100,
    y: 1080,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  })
  mainWindow.setAspectRatio(1)
  mainWindow.loadFile(path.resolve(__dirname, '../src/index.html'))
  mainWindow.webContents.toggleDevTools() // 开启开发者工具
  createMenu(mainWindow)
}

app.whenReady().then(() => {
  createWindow()

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.on('activate', () => {
    createWindow()
  })
})