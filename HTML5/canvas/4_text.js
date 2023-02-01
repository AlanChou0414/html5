const doFirst = () => {
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')

  context.font='bold 50px sans-serif';
  context.textBaseline='alphabetic';
  
  context.strokeText('yellow', 100, 100);

  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle='red';
  context.stroke();
  
}

window.addEventListener('load', doFirst)