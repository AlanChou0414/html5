const doFirst = () => {
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    if (sessionStorage.username == null) {
      let name = prompt(`What's your username?`)
      sessionStorage.username = name
    } else {
      alert(sessionStorage.username)
    }
  })
}

window.addEventListener('load', doFirst)