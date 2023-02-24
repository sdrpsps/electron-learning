window.api.updateH1((value) => {
  const h1 = document.querySelector('h1')
  h1.textContent = value
})

window.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.querySelector('#btn1')
  btn1.addEventListener('click', () => {
    window.api.upload((fileName) => {
      const input = document.querySelector('#inp1')
      input.value = fileName
    })
  })
  const btn2 = document.querySelector('#btn2')
  btn2.addEventListener('click', () => {
    const inp2 = document.querySelector('#inp2')
    window.api.updateTitle(inp2.value)
  })
})
