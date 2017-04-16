class Ball {
  constructor(canvas, ctx) {
    this.x = 100;
    this.y = 100;
    this.vy = 2;
    this.vx = 3;
    this.radius = 25;
    this.color = 'radius';
    this.draw = this.draw.bind(this);
    this.raf;
    this.canvas = canvas;
    this.ctx = ctx;
    this.animate = this.animate.bind(this);
    this.draw();
  }

  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  animate(){
    // debugger
    // this.ctx.clearRect(75, 75, this.canvas.width, 50);
    this.draw();
    this.x += this.vx;
    window.requestAnimationFrame(this.animate);
  }
}

export default Ball;
