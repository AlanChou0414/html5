function doFirst(){
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    if(canvas.width > canvas.height){
        range = canvas.width / 50
    }else{
        range = canvas.height / 50
    }

    context.beginPath();
    for(let i = 0; i <= range; i++){
        let interval = i * 50

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        
        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 8);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();
    // =====

    // 四分之一
    context.beginPath();
    context.strokeStyle='rgba(0,0,0,0.7)';
    
    context.moveTo(           0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();

    context.moveTo(canvas.width / 2,             0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
    // =====

    context.font='bold 30px Tahoma';    
    context.fillText('arcTo()', 50, 50);

    context.strokeStyle='red';
    context.lineWidth=5;

    // 左上    
    context.beginPath();
    context.moveTo(100, 250);    
    context.arcTo(250, 100, 400, 350, 150);    
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(100, 250); 
        context.lineTo(250, 100); 
        context.lineTo(400, 350); 
        context.stroke();

        // 加上座標
        context.font='10px Tahoma';    
        context.fillText('(100, 250)', 80, 260);        

    // 左下
    context.strokeStyle='red';
    context.lineWidth=5;

    context.translate(0, 400);
    
    context.beginPath();
    context.moveTo(100, 250);    
    context.arcTo(250, 100, 400, 350, 150);    
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(100, 250); 
        context.lineTo(250, 100); 
        context.lineTo(400, 350); 
        context.stroke();

    context.translate(0, -400);

}
window.addEventListener('load',doFirst)