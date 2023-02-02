const doFirst = () => {
  document.querySelector('#dropzone').ondragover = dragOver
  document.querySelector('#dropzone').ondrop = dropped
}
const dragOver = (e) => { e.preventDefault() }
const dropped = (e) => {
  e.preventDefault()
  let file = e.dataTransfer.files[0]
  document.querySelector('#fileName').innerText = file.name

  let readFile = new FileReader()
  readFile.readAsDataURL(file)
  readFile.addEventListener('load', () => {
    let myMovie = document.querySelector('#myMovie')
    myMovie.src = readFile.result
    myMovie.controls = true
    myMovie.style.borderRadius = '10px'
  })
}

window.addEventListener('load', doFirst)