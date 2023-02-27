const { app, shell, Menu, dialog } = require('electron')

const createMenu = (win) => {
  const template = [
    {
      label: app.name,
      submenu: [
        {
          label: '访问官网',
          click: () => {
            shell.openExternal('https://hchow.icu')
          },
        },
        {
          label: '退出',
          click: async () => {
            const res = await dialog.showMessageBox({
              title: '嘻嘻',
              detail: '确定退出吗',
              buttons: ['取消', '确定'],
              cancelId: 1,
            })
            if(res.response === 1){
              app.quit()
            }
          },
        },
      ],
    },
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

module.exports = {
  createMenu,
}
