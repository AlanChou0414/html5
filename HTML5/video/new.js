const doFirst = () => {
  // 先取值
  myMovie = document.querySelector('#myMovie')
  playButton = document.querySelector('#playButton')
  defaultBar = document.querySelector('#defaultBar')
  progress = document.querySelector('#progress')
  fullButton = document.querySelector('#fullButton')

  barsize = parseInt(getComputedStyle(defaultBar).width)

  // 在建立event
  playButton.addEventListener('click', playOrPause)
  // defaultBar.addEventListener('click', clickBar)

  //? full screen
  /*
  fullButton.addEventListener('click', () => {
    myMovie.webkitEnterFullScreen()
  })
  */
}

const playOrPause = () => {
  if (!myMovie.paused && !myMovie.ended) {
    myMovie.pause()
    playButton.innerText = 'play'
  } else {
    myMovie.play()
    playButton.innerText = 'pause'
    setInterval(update, 300)
  }
}
const update = () => {
  if (!myMovie.ended) {
    let size = barsize / myMovie.duration * myMovie.currentTime
    progress.style.width = `${size}px`
  } else {
    progress.style.width = `0px`
    playButton.innerText = 'play'
    myMovie.currentTime = 0
  }
}

window.addEventListener('load', doFirst)