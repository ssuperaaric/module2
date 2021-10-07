this.canvas = document.getElementById('tutorial')        
this.ctx = this.canvas.getContext('2d')

let array = [500,600,700,800,900];
let whichOne = Math.floor(Math.random() * 5);
let finishLinePosition = array[whichOne];
 


function initcanvascircle(vx, vy) {
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, 1000, 1000)
    this.ctx.strokeStyle = 'black'
    this.ctx.strokeRect(1, 1, 999, 999)
    this.ctx.fillStyle = 'blue'
    this.ctx.beginPath();
    this.ctx.arc(finishLinePosition,800,70,0,2*Math.PI);
    this.ctx.fill();
   
    this.ctx.beginPath()
    this.ctx.fillStyle = 'red'
    this.ctx.arc(vx, vy, 30, (0 * Math.PI) / 180, (360 * Math.PI) / 180, true)
    this.ctx.closePath()
    this.ctx.fill()
}



function   startevent2() {
    let nvx = 0
    let self = this
    let 点 = 800;
    let nvy = 200
    let frictionorspot = 500
    ;(function frame() {
        let globalID = window.requestAnimationFrame(frame)
        nvx = nvx + (frictionorspot - nvx) * 0.02
        nvy = nvy + (nvy) * 0.01
        if (nvy < 点) {
            // self.ctx.clearRect(0, 0, 800, 800)
            self.initcanvascircle(nvx,nvy)
        } else {
            window.cancelAnimationFrame(globalID) 
        }
    })()
}



window.onload = startevent2;




