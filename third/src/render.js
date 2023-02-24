window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    window.api.mainEvent()
  })
  const btn2 = document.querySelector('#btn2')
  btn2.addEventListener('click', () => {
    window.api.setWindowSize({
      height: +document.querySelector('#height').value,
      width: +document.querySelector('#width').value,
    })
  })
})
