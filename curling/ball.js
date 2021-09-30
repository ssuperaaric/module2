   this.canvas = document.getElementById('tutorial')        
   this.ctx = this.canvas.getContext('2d')

function initcanvascircle(vx) {
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, 2000, 400)
    this.ctx.strokeStyle = 'black'
    this.ctx.strokeRect(1, 1, 1999, 798)
    this.ctx.fillStyle = 'blue'
    this.ctx.beginPath();
    this.ctx.arc(1800,200,70,0,2*Math.PI);
    this.ctx.fill();
   
    this.ctx.beginPath()
    this.ctx.fillStyle = 'red'
    this.ctx.arc(vx, 200, 30, (0 * Math.PI) / 180, (360 * Math.PI) / 180, true)
    this.ctx.closePath()
    this.ctx.fill()
}



function   startevent2() {
    let nvx = 0
    let self = this
    ;(function frame() {
        let globalID = window.requestAnimationFrame(frame)
        nvx = nvx + (1800 - nvx) * 0.01
        if (nvx < 1800) {
            // self.ctx.clearRect(0, 0, 800, 800)
            self.initcanvascircle(nvx)
        } else {
            window.cancelAnimationFrame(globalID) 
        }
    })()
}



window.onload = startevent2;