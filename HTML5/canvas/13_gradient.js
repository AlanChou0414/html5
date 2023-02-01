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
    context.fillText('linear gradient', 50, 50);

    // let gradient = context.createLinearGradient(100, 100, 500, 300);
    let gradient = context.createLinearGradient(100, 200, 500, 200);
    gradient.addColorStop(  0, 'red');
    gradient.addColorStop(  1, 'blue'); 
    gradient.addColorStop(0.5, 'yellow'); 

    // context.fillStyle='yellow';
    context.fillStyle=gradient;
    context.fillRect(100, 100, 400, 200);

    //============
    context.fillText('radial gradient', 50, 400);

    let radial = context.createRadialGradient(300, 600, 70, 250, 600, 150);
    radial.addColorStop(0, 'red');
    radial.addColorStop(1, 'blue'); 
    
    context.fillStyle=radial;
    context.fillRect(100, 450, 400, 300);

    // =============
    context.beginPath();
    context.lineWidth=15;
    
    context.translate(750, 400);   
    
    let radius = 150
    let circle = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circle.addColorStop(  0, '#666');
    circle.addColorStop(0.5, '#fff');
    circle.addColorStop(  1, '#666');
    
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.strokeStyle=circle;
    context.stroke();
    
    context.translate(-750, -400);
}
window.addEventListener('load',doFirst)