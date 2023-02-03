const doFirst = () => {
  let area = document.querySelector('#map')
  let position = new google.maps.LatLng(22.6295808, 120.2880512)
  let option = {
    zoom: 14, //0~22
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  let map = new google.maps.Map(area, option)
  let marker = new google.maps.Marker({
    position,
    map,
    title: 'iSpan',
  })
}
window.addEventListener('load', doFirst)