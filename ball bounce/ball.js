window.onload = canvas;
 
function canvas()
{
var myCanvas = document.getElementById("myCanvas");
 
if( myCanvas && myCanvas.getContext("2d") ) 
{
var context         = myCanvas.getContext("2d");
var r = 50;
var x = -r;
var y = 200
 
setInterval(function(){
context.fillStyle   = "#000";
context.fillRect(0, 0, context.canvas.width, context.canvas.height);
var y = Math.floor(Math.random() * 600);
context.beginPath();
context.fillStyle   = "red";
context.arc(x++, y, r, 0, 2 * Math.PI);
context.fill();
console.log (x)
console.log (y)
 
if( x >= context.canvas.width + r)
    x  = -r; 
}, 10);
}
}
