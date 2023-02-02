const doFirst = () => {
  document.querySelector('#theFile').onchange = fileChange
}
const fileChange = (event) => {
  let files = document.querySelector('#theFile').files
  let message = ``

  for (let i = 0; i < files.length; i++) {
    message += `File name : ${files[i].name}\n`
    message += `File type : ${files[i].type}\n`
    message += `File size : ${files[i].size} byte\n`
    message += `File lastModifiedDate : ${files[i].lastModifiedDate}\n`
    message += `============\n`
  }


  document.querySelector('#fileInfo').value = message
}
window.addEventListener('load', doFirst)