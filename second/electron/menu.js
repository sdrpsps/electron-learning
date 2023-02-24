const { Menu } = require('electron')

const createMenu = (window) => {
  const menu = [
    {
      label: '菜单',
      submenu: [
        {
          label: '修改h1',
          click: () => {
            window.webContents.send('test', 'dasfafsafasfasf')
          },
        },
      ],
    },
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

module.exports = { createMenu }
