const doFirst = () => {
  //get value
  image = document.querySelector('#image')
  image.addEventListener('dragstart', starDrag)
  image.addEventListener('dragend', endDrag)

  right = document.querySelector('#right')
  // right.addEventListener('dragenter', (event) => { event.preventDefault() })
  right.addEventListener('dragover', (event) => { event.preventDefault() })
  right.addEventListener('drop', dropped)
}

const starDrag = (event) => {
  let data = `<img src="${image.src}" alt="${image.alt}">`
  event.dataTransfer.setData('image/png', data)
}
const endDrag = () => {
  image.style.visibility = 'hidden'
}
const dropped = (event) => {
  event.preventDefault()
  right.innerHTML = event.dataTransfer.getData('image/png')
}

window.addEventListener('load', doFirst)