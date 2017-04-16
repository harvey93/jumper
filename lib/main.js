import Game from './game.js';
import Projectile from './projectile.js';
import Player from './player.js';
import Ball from './ball.js';

document.addEventListener("DOMContentLoaded", ()=> {
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// var raf;
// var raf2;
// var raf3;

// var player = {
//   x: 100,
//   y: 400,
//   dvy: 4,
//   vy: -4,
//   state: "ground",
//   radius: 25,
//   color: 'blue',
//   keypressed: false,
//   draw: function() {
//     // ctx.beginPath();
//     // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     // ctx.closePath();
//     // ctx.fillStyle = this.color;
//     // ctx.fill();
//     // ctx.beginPath();
//
//     ctx.fillRect(this.x, this.y, 20, 50);
//     // ctx.closePath();
//   }
// };
//
// function draw() {
//   ctx.clearRect(100, 280, 20, 200);
//   player.draw();
//   if (player.y > 280 && (player.state === "ground" || player.state === "going up")) {
//     player.y += player.vy;
//     player.state = "going up";
//     window.requestAnimationFrame(draw);
//   }else if (player.y <= 280) {
//     player.state = "going down";
//     player.y += player.dvy;
//     window.requestAnimationFrame(draw);
//   }else if (player.state === "going down" && player.y >= 400) {
//     player.y = 400;
//     player.state = "ground";
//     player.keypressed = false;
//   }else if (player.state === "going down") {
//     player.y += player.dvy;
//     window.requestAnimationFrame(draw);
//   }
//
// }

// document.addEventListener('keypress', function(e) {
//   if (e.key === 'w' && player.keypressed === false) {
//     window.requestAnimationFrame(draw);
//     player.keypressed = true;
//   }
// });
//
// player.draw();

// let player = new Player(canvas, ctx);
let game = new Game(canvas, ctx);
game.draw();

document.addEventListener("keypress", (e) => {
    game.keyProcessor(e);
});

//PLAYER
// let player1 = new Player(canvas, ctx);
//
// document.addEventListener('keypress', function(e) {
//   if (e.key === 'w' && player1.keypressed === false) {
    // window.requestAnimationFrame(player1.animateJump);
    // player1.keypressed = true;
//   }
// });



//BALL
// let ball = new Ball(canvas, ctx);
//
// // function draw3(){
// //   ctx.clearRect(0,0, canvas.width, canvas.height);
// //   ball.draw();
// //   ball.x += ball.vx;
// //   window.requestAnimationFrame(draw3);
// //
// // }
//
//
// document.addEventListener('keypress', (e) => {
//   if (e.key === 'b') {
//     window.requestAnimationFrame(ball.animate);
//   }
// });



// var projectile = {
//   x: 600,
//   y: 430,
//   dx: -8,
//   color: 'blue',
//   draw: function() {
//     // ctx.beginPath();
//     // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     // ctx.closePath();
//     // ctx.fillStyle = this.color;
//     // ctx.fill();
//     // ctx.beginPath();
//
//     ctx.fillRect(this.x, this.y, 40, 20);
//     // ctx.closePath();
//   }
// };

// function draw2() {
//   ctx.clearRect(120, 430, canvas.width, 20);
//   ctx.clearRect(0, 430, 100, 20);
//   projectile.draw();
//   projectile.x += projectile.dx;
//   window.requestAnimationFrame(draw2);
// }


// document.addEventListener('keypress', function(e) {
//   if (e.key === 'l') {
//     projectile.x = 600;
//     projectile.y = 430;
//     projectile.draw();
//     window.requestAnimationFrame(draw2);
//   }
// });


//PROJECTILE
// document.addEventListener('keypress', function(e) {
//   if (e.key === 'l') {
//     let proj = new Projectile(canvas, ctx);
//     window.requestAnimationFrame(proj.animate);
//   }
// });

// setInterval(() => {
//       projectile.x = 600;
//       projectile.y = 430;
//       projectile.draw();
//       window.requestAnimationFrame(draw2);
//
// }, 1000);

});


// document.addEventListener('DOMContentLoaded', () => {
//   // let game = new Game();
//
//   // const stage = new createjs.Stage(canvas);
//
//   // let circle = new createjs.Shape();
//   //
//   // circle.graphics.beginFill("DeepSkyBlue").drawCircle(100, 100, 50);
//   // let player = new Player(stage);
//   //
//     // let proj = new Projectile(700, 400, stage);
//   //
//   // canvas.addEventListener("click", () => {
//   //   player.jump();
//   // });
//   //
//   // setTimeout(new Projectile(700, 400, stage), 1000);
//   //
//   // let player = new Player(stage);
//   // // player.draw();
//   // document.addEventListener("keypress", () => {
//   //   player.jump();
//   // });
//     // stage.addChild(proj.roundRect);
//     // createjs.Tween.get(proj.roundRect, { loop: false })
//     // .to({ x: -1000 }, 1000, createjs.Ease.getPowInOut(1));
//     // createjs.Ticker.setFPS(60);
//     // createjs.Ticker.addEventListener("tick", stage);
//
//   // stage.addChild(proj.roundRect);
//   // stage.update();
//   // document.addEventListener("keydown", (e) => {
//   //   game.keyProcessor(e);
//   // });
//
//   // const canvas = document.getElementById('canvas');
//   // // debugger
//   // const context = canvas.getContext("2d");
//   // const player = new Player(100, 400, context);
//   // player.draw();
//   //
//   // document.addEventListener("keydown", (e) => {
//   //   if (e.key === "ArrowUp") {
//   //     player.jump();
//   //   }
//   // });
//   // function MainLoop() {
//   //   game.update();
//   //   game.draw();
//   //   // Call the main loop again at a frame rate of 30fps
//   //   setTimeout(MainLoop, 10);
//   // }
//
//   // MainLoop();
//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');
//   // console.log(canvas);
//   const ball = new Ball(canvas, ctx);
//   const raf = ball.raf;
//
//   canvas.addEventListener('mouseover', function(e) {
//     raf = window.requestAnimationFrame(ball.draw);
//   });
//
//   // console.log(ball);
// });
