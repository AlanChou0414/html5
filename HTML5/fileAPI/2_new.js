const doFirst = () => {
  document.querySelector('#theFile').onchange = fileChange
}
const fileChange = (event) => {
  let file = document.querySelector('#theFile').files[0]
  let message = ``
  message +=`File name : ${file.name}\n`
  message +=`File type : ${file.type}\n`
  message +=`File size : ${file.size} byte\n`
  message +=`File lastModifiedDate : ${file.lastModifiedDate}\n`

  document.querySelector('#fileInfo').value = message
}
window.addEventListener('load', doFirst)