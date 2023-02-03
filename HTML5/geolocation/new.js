const doFirst = () => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}
const successCallback = (event) => {
  if (event.coords.accuracy > 10000) {
    document.querySelector('#position').innerHTML = `超過偵測範圍`
  } else {
    document.querySelector('#position').innerHTML = `
    緯度：${event.coords.latitude} <br>
    經度：${event.coords.longitude} <br>
    準確度：${event.coords.accuracy} 公尺
    `
  }
}
const errorCallback = (event) => {
  document.querySelector('#position').innerHTML = `
  錯誤碼：${event.code} <br>
  錯誤訊息：${event.message} <br>
  `
}

window.addEventListener('load', doFirst)