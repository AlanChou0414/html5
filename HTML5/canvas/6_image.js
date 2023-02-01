const doFirst = () => {
  const canvas = document.querySelector('#canvas')
  context = canvas.getContext('2d')

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

  pic1 = new Image()
  pic1.src = 'https://fakeimg.pl/300x300/CCC';
  pic1.addEventListener('load',drawing)
  
  pic2 = new Image()
  pic2.src = 'https://fakeimg.pl/300x300/CCC';
  pic2.addEventListener('load',drawing)

  const drawing = () => {
    context.globalAlpha=.5;
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
    context.globalAlpha=.5;
    context.drawImage(pic2, 700, 500, 300, 300);
  }
}

window.addEventListener('load', doFirst)