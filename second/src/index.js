window.api.updateH1((value) => {
  const h1 = document.querySelector('h1')
  h1.textContent = value
})

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    window.api.upload()
  })
})
