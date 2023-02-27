const { app, Menu, shell, BrowserWindow } = require('electron')

const createMenu = (win) => {
  const isDarwin = process.platform === 'darwin'

  const config = [
    ...(isDarwin
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: '访问网站',
                accelerator: 'CommandOrControl+W',
                click: () => shell.openExternal('https://hchow.icu'),
              },
              {
                label: '向渲染进程发送事件',
                click: () => {
                  win.webContents.send('toPreload', '这是在菜单栏触发的内容')
                },
              },
            ],
          },
        ]
      : []),
    {
      label: '操作',
      submenu: [
        {
          label: '打开新窗口',
          accelerator: 'CommandOrControl+N',
          click: () => new BrowserWindow({ width: 400, height: 400 }),
        },
        { type: 'separator' },
        {
          role: isDarwin ? 'close' : 'quit',
        },
      ],
    },
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(config))
}

module.exports = {
  createMenu,
}
