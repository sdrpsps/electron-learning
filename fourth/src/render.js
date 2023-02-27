window.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.querySelector('#btn1')
  btn1.addEventListener('click', () => {
    window.api.mainEvent()
  })
  window.api.menuEvent((val) => {
    const h1 = document.querySelector('h1')
    h1.textContent = val
  })
})
