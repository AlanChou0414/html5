const doFirst = () => {
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')

  context.font='bold 50px sans-serif';
  context.textBaseline='alphabetic';
  
  // 第一個字
  context.strokeText('yellow', 100, 100);
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle='red';
  context.stroke();


   // 第二個字
   context.shadowColor='red';
   context.shadowOffsetX=5;
   context.shadowOffsetY=5;
   context.shadowBlur=5;

   context.fillText('yellow', 100, 200);
   
   // 第三個字
   context.shadowOffsetX=0;
   context.shadowOffsetY=0;
   context.shadowBlur=15;
   context.fillStyle='#fff';
   
   context.fillText('yellow', 100, 300);

   // 第四個字 
   context.shadowOffsetX=5;
   context.shadowOffsetY=5;
   context.shadowBlur=15;     
   context.fillText('yellow', 100, 400);

   context.shadowColor='blue';
   context.fillText('yellow', 100, 400);
  
  
}

window.addEventListener('load', doFirst)