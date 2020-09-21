document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
   canvasEl.height = 500;
   canvasEl.width = 500;
   
   let ctx = canvasEl.getContext('2d');

   ctx.fillStyle = 'red'
   ctx.fillRect(20, 20, 20, 20);

   ctx.beginPath();
   ctx.arc(100, 100, 10, 20, 2 * Math.PI, true);
   ctx.strokeStyle='blue';
   ctx.lineWidth = 20;
   ctx.stroke();
   ctx.fillStyle = 'green';
   ctx.fill();
   
   
});
