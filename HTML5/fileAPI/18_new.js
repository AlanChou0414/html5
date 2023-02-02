const doFirst = () => {
  document.querySelector('#dropzone').ondragover = dragOver
  document.querySelector('#dropzone').ondrop = dropped
}
const dragOver = (e) => { e.preventDefault() }
const dropped = (e) => {
  e.preventDefault()

  let files = e.dataTransfer.files
  let readFile = new FileReader()
  for (let i = 0; i < files.length; i++) {
    readFile.readAsDataURL(files[i])
    readFile.addEventListener('load', () => {

      let images = document.createElement('img')
      images.src = readFile.result
      let dropzone = document.querySelector('#dropzone')
      dropzone.appendChild(images)
    })
  }

}

window.addEventListener('load', doFirst)