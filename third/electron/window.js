const { BrowserWindow, screen } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 300,
    y: 1080,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
      sandbox: false,
    },
  })
  mainWindow.webContents.toggleDevTools()
  mainWindow.loadFile(path.resolve(__dirname, '../src/index.html'))
  const win = screen.getPrimaryDisplay().workAreaSize

  setTimeout(() => {
    mainWindow.setBounds({ width: 600, height: 600, x: win.width / 2 - 300, y: 100 }, true)
  }, 1000)
}

module.exports = { createWindow }
