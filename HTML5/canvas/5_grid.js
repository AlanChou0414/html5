const doFirst = () => {
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')

  if (canvas.width > canvas.height) {
    range = canvas.width / 50
  } else {
    range = canvas.height / 50
  }

  for (let i = 0; i < 100; i++) {
    let interval = i * 50
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    context.fillText(interval, 0, interval);

    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    context.fillText(interval, interval, 8);

  }

  context.strokeStyle = 'rgba(0,0,0,0.3)';
  context.stroke();

}

window.addEventListener('load', doFirst)