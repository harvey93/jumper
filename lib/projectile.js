// class Projectile {
//   constructor(posX, posY, stage) {
//     this.roundRect = new createjs.Shape();
//     this.roundRect.graphics.beginFill("Red").drawRoundRect(posX, posY, 50, 25, 10);
//     this.stage = stage;
//     this.moveLeft();
//   }
//
//   moveLeft(){
//     this.stage.addChild(this.roundRect);
//     createjs.Tween.get(this.roundRect, { loop: false })
//     .to({ x: -1000 }, 1000, createjs.Ease.getPowInOut(1));
//     createjs.Ticker.setFPS(60);
//     createjs.Ticker.addEventListener("tick", this.stage);
//   }
// }
class Projectile {
  constructor(canvas, ctx, game, y, dx) {
    this.x = 750;
    this.y = y;
    this.dx = dx;
    this.canvas = canvas;
    this.ctx = ctx;
    this.game = game;
    this.animate = this.animate.bind(this);
  }

  draw(){
    let projectileImage = new Image();
    projectileImage.src = './assets/images/iago.png';
    this.ctx.drawImage(projectileImage, this.x, this.y, 110, 55);

    // this.ctx.fillRect(this.x, this.y, 40, 20);
  }

  animate(){
    // this.ctx.clearRect(120, 430, this.canvas.width, 20);
    // this.ctx.clearRect(0, 430, 100, 20);
    // debugger
    this.game.draw();
    this.x += this.dx;
    window.requestAnimationFrame(this.animate);
  }
}

export default Projectile;
// https://github.com/DrBaryon/kittygrabber
