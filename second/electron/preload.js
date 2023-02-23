const { ipcRenderer } = require('electron')
const fs = require('fs')
const path = require('path')

const content = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
console.log(content)

// 进程通信
ipcRenderer.send('saveFile')
