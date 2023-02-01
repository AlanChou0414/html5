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

    context.font='bold 30px Tahoma';    
    context.fillText('lineCap', 50, 50);

    context.strokeStyle='red';
    context.lineWidth=20;

    context.beginPath();
    context.lineCap='butt';    
    context.moveTo(100, 150);
    context.lineTo(250, 150);
    context.stroke();

    context.beginPath();
    context.lineCap='round';  
    context.moveTo(100, 200);
    context.lineTo(250, 200);
    context.stroke();

    context.beginPath();
    context.lineCap='square';  
    context.moveTo(100, 250);
    context.lineTo(250, 250);
    context.stroke();

    // ===========
    context.font='bold 30px Tahoma';    
    context.fillText('lineJoin', 50, 400);
    
    context.lineJoin='miter';    
    context.strokeRect(100, 500, 100, 150);

    context.lineJoin='bevel';  
    context.strokeRect(250, 500, 100, 150);

    context.lineJoin='round';  
    context.strokeRect(400, 500, 100, 150);
}
window.addEventListener('load',doFirst)