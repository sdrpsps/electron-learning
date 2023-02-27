const { BrowserWindow } = require('electron')
const path = require('path')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    x:1500,
    y:0,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
    },
  })
  win.loadFile(path.resolve(__dirname, '../src/index.html'))
  win.webContents.openDevTools()
}

module.exports = {
  createWindow,
}
