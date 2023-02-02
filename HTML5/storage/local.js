const doFirst = () => {
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    if (localStorage.username == null) {
      let name = prompt(`What's your username?`)
      localStorage.username = name
    } else {
      alert(localStorage.username)
    }
  })
}

window.addEventListener('load', doFirst)