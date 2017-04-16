import Projectile from './projectile.js';
import Player from './player.js';
import Ball from './ball.js';

class Game {
  constructor(canvas, ctx){
    this.game = this;
    this.player = new Player(canvas, ctx, this.game);
    this.projectiles = [];
    // this.projectile = new Projectile(canvas, ctx, this);
    this.keypressed = false;
    this.randomY = this.randomY.bind(this);
    this.canvas = canvas;
    this.ctx = ctx;
    this.game = this;
    this.gameOver = this.gameOver.bind(this);
    this.collision = this.collision.bind(this);
    this.reset = this.reset.bind(this);
    this.state;
    this.intervalId;
    this.timerIntervalId;
    this.drawBackground = this.drawBackground.bind(this);
    this.calcProjVel = this.calcProjVel.bind(this);
    // window.requestAnimationFrame(this.drawBackground);
    this.player.y = 70;
    window.requestAnimationFrame(this.player.animateJump);
    this.player.keypressed = true;

    // this.draw();
    // this.drawBackground();
  }

  reset(){
    this.projectiles = [];
    this.state = "over";
    this.keypressed = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
    document.getElementById('timer').innerHTML = "0";

  }

  draw(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.player.draw();
    // this.projectile.draw();
    // this.projectiles.forEach(proj => proj.draw());
    this.projectiles.forEach(projectile => {
      if (projectile.x > 0) {
        projectile.draw();
      }
    });
    this.gameOver();

  }

drawBackground(){
  // debugger
  let baseImage = new Image();
  baseImage.src = './assets/images/desert.png';
  this.ctx.drawImage(baseImage, 50, 50);

}


  gameOver(){
    this.projectiles.forEach(projectile => {
      if (projectile.x <= 115 && projectile.x >= 100 && this.collision(projectile, this.player)) {
        // alert('Game Over');
        if (document.getElementById('timer').innerHTML === '1') {
          document.getElementById('alert').innerHTML = `Game Over, you survived ${document.getElementById('timer').innerHTML} second`;
        }else {
          document.getElementById('alert').innerHTML = `Game Over, you survived ${document.getElementById('timer').innerHTML} seconds`;
        }
        document.getElementById('alert').style.display='block';
        setTimeout(
          () => (document.getElementById('alert').style.display='none'),
          3000);

        this.reset();
      }
    });
  }

  collision(rect1, rect2){
    if (rect2.y + rect2.height > rect1.y && rect2.state !== "ducked") {
        return true;
    }else if (rect2.state === "ducked" && rect2.y === rect1.y) {
      return true;
    }
  }

// rect2.y + rect2.height > rect1.y

  randomY(){
    if ( Math.floor(((Math.random() * 10))/5) === 0) {
      return 250;
    }else {
      return 330;
    }
  }

  calcProjVel(){
    if (parseInt(document.getElementById('timer').innerHTML) < 5) {
      return -14;
    }else if (parseInt(document.getElementById('timer').innerHTML) < 10) {
      return -18;
    }else if (parseInt(document.getElementById('timer').innerHTML) < 15) {
      return -22;
    }else {
      return -26;
    }

  }

  keyProcessor(e){
    // debugger
    if (e.key === 'l' && this.keypressed === false) {
      this.timerIntervalId = setInterval(()=> {
        let newVal = parseInt(document.getElementById('timer').innerHTML) + 1;
        document.getElementById('timer').innerHTML = newVal.toString();

      },1000);
      // this.projectile = new Projectile(this.canvas, this.ctx, this.game);
      this.keypressed = true;
      this.state = "playing";
        this.intervalId = setInterval(() => {
          if (this.state !== "over") {
            let proj = new Projectile(this.canvas, this.ctx, this.game, this.randomY(), this.calcProjVel());
            this.projectiles.push(proj);
            // this.projectiles.forEach(projectile => window.requestAnimationFrame(projectile.animate));
            this.projectiles.forEach(projectile => {
              if (projectile.x > 0) {
                window.requestAnimationFrame(projectile.animate);
              }
              // debugger
            });

          }

        },1000);

      // window.requestAnimationFrame(this.projectile.animate);
    }else if (e.key === 'w' && this.player.keypressed === false && this.player.state !== 'ducked') {
      window.requestAnimationFrame(this.player.animateJump);
      this.player.keypressed = true;
    }else if (e.key === 's' && this.player.state === 'ground') {
      this.player.duck();
    }else if (e.key === "w" && this.player.state === 'ducked') {
      this.player.unduck();
    }
  }
}

// class Game {
//   constructor() {
//     this.canvas = document.getElementById('canvas');
//     this.width = this.canvas.width;
//     this.height = this.canvas.height;
//     this.context = this.canvas.getContext("2d");
//     // ctx.fillStyle="#FF0000";
//     // this.context.fillStyle="white";
//     this.player = new Player(100, 400, this.context);
//
//
//     // this.paused = false;
//   }
//
//   draw(){
//     this.context.fillStyle="#ff7e82";
//     this.context.fillRect(0, 0, this.width, this.height);
//     // console.log(this.player);
//     this.player.draw(this.context);
//     // this.context.fillRect(this.width/2, 0, 2, this.height);
//   }
//
//   update(){
//     if (this.paused)
//             return;
//   }
//
//   jump(){
//     debugger
//     this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
//     this.player.draw();
//     this.player.x += this.player.vx;
//     this.player.y += this.player.vy;
//     this.raf = window.requestAnimationFrame(this.jump);
//   }
//
//
//   keyProcessor(e){
//     if (e.key === 'ArrowDown' && this.player.state !== "ducked") {
//       this.player.duck();
//     }else if (e.key === 'ArrowUp' && this.player.state === "ducked") {
//       this.player.unduck();
//     }else if (e.key === 'ArrowUp') {
//       // this.jump();
//       this.player.jump();
//     }
//   }
//
//
// }
//


export default Game;
