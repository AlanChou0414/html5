const doFirst = () => {
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')

  context.fillStyle='red';
  context.strokeStyle='blue';
  
  context.moveTo(100, 100);
  context.lineTo(250, 250);
  context.lineTo(400, 50);
  context.lineTo(50, 200);
  context.closePath();
  
  context.stroke();
  context.fill();
}

window.addEventListener('load', doFirst)