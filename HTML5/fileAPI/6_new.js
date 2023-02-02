const doFirst = () => {
  document.querySelector('#theFile').onchange = fileChange
}
const fileChange = (event) => {
  let file = document.querySelector('#theFile').files[0]
  let message = ``
  message += `File name : ${file.name}\n`
  message += `File type : ${file.name}\n`
  message += `File size : ${file.name} byte\n`
  message += `File lastModifiedDate : ${file.lastModifiedDate}\n`
  document.querySelector('#fileInfo').value = message

  let readFile = new FileReader()
  readFile.readAsDataURL(file)
  readFile.addEventListener('load', () => {
    let image = document.querySelector('#image')
    image.src = readFile.result
    image.style.maxWidth = '400px'
    image.style.maxHeight = '400px'
  })
}
window.addEventListener('load', doFirst)