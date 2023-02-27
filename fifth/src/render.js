window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', async () => {
    const files = await window.api.selectFilePreload()
    for (const file of files) {
      const input = document.createElement('input')
      input.value = file
      container.appendChild(input)
    }
  })

  const btn2 = document.querySelector('#btn2')
  const textarea = document.querySelector('#textarea')
  btn2.addEventListener('click', () => {
    window.api.saveFilePreload(textarea.value)
  })
})
