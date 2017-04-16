/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectile_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ball_js__ = __webpack_require__(4);





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
let game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](canvas, ctx);
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Projectile);
// https://github.com/DrBaryon/kittygrabber


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var requestAnim = window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    setInterval;
var gravity = 0.1;

class Player {
  constructor(canvas, ctx, game) {
    this.game = game;
    this.height = 150;
    this.width = 100;
    this.x = 100;
    this.y = 250;
    // this.y = 400;
    this.dvy = 10;
    this.vy = -10;
    this.state = "ground";
    this.keypressed = false;
    this.ctx = ctx;
    this.canvas = canvas;
    this.animateJump = this.animateJump.bind(this);
    this.draw = this.draw.bind(this);
    this.draw();
  }



  draw(){
    let playerImage = new Image();
    playerImage.src = './assets/images/player.png';
    this.ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

    duck(){
      // debugger
      let temp;
      this.y += this.height - this.width;
      temp = this.width;
      this.width = this.height;
      this.height = temp;
      this.state = "ducked";
      this.game.draw();
    }

    unduck(){
      let temp;
      this.y += this.height - this.width;
      temp = this.width;
      this.width = this.height;
      this.height = temp;
      this.state = "ground";
      this.game.draw();
    }


  animateJump(){
    // debugger
    // this.ctx.clearRect(100, 280, 20, 200);
    this.game.draw();
    if (this.y > 75 && (this.state === "ground" || this.state === "going up")) {
      this.y += this.vy;
      this.state = "going up";
      window.requestAnimationFrame(this.animateJump);
    }else if (this.y <= 75) {
      this.state = "going down";
      this.y += this.dvy;
      window.requestAnimationFrame(this.animateJump);
    }else if (this.state === "going down" && this.y >= 250) {
      this.y = 250;
      this.state = "ground";
      this.keypressed = false;
    }else if (this.state === "going down") {
      this.y += this.dvy;
      window.requestAnimationFrame(this.animateJump);
    }

  }
}


// class Player {
//   constructor(x,y, context) {
//     this.x = x;
//     this.y = y;
//     this.width = 20;
//     this.height = 50;
//     this.draw = this.draw.bind(this);
//     this.context = context;
//     this.state = "normal";
//     this.vel = 0;
//     this.keypressed = false;
//     this.vx = 5;
//     this.vy = 2;
//     // this.stage = stage;
//     // this.player = new createjs.Shape();
//     // this.player.graphics.beginFill("DeepSkyBlue").drawCircle(100, 400, 25);
//     // // this.player.x = 100;
//     // // this.player.y = 400;
//     // this.setToStage();
//   }
//
//
//   // draw(){
//   //   // context.fillRect(this.x, this.y, this.width, this.height);
//     // context.fillRect(this.x, this.y, this.width, this.height);
//   //   // debugger;
//   //   this.context.fillStyle='#00a699';
//   //   this.context.fillRect(this.x, this.y, this.width, this.height);
//   //
//   // }
//
//   update() {
//     // Check if we are underground
//     if (this.y + this.velocity + 36 > 500) {
//         // If so, move us back to ground level and set velocity to zero
//         this.velocity = 0;
//         this.y = 500 - 36;
//     } else {
//         // Otherwise, move what is indicated by velocity
//         this.velocity += gravity;
//         this.y += this.velocity;
//     }
// }
//
//   jump(){
//     // var canvas = document.getElementById('canvas');
//     console.log("jump");
//     // this.context.clearRect(0, 0, canvas.width, canvas.height);
//     this.y -= 50;
//     this.draw();
//   }
// //   jump(){
// //     var ctx = this.context;
// //     var that = this;
// //     requestAnim(function loop() {
// //       // Clear the screen
// //       let canvas = document.getElementById("canvas");
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       // Redraw the grass where it is supposed to be
// //       that.draw();
// //       // If the key is pressed, set velocity to -5
// //       if (that.keypressed) {
// //           that.velocity = -5;
// //           that.keypressed = false;
// //       }
// //       that.update();
// //       // Do again
// //       requestAnim(loop);
// //   });
// // }
//
//
//   // draw() {
//   // var canvas = document.getElementById('canvas');
//   // if (canvas.getContext) {
//   //    var ctx = canvas.getContext('2d');
//   //
//   //   ctx.beginPath();
//   //   ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//   //   ctx.moveTo(110, 75);
//   //   ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//   //   ctx.moveTo(65, 65);
//   //   ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//   //   ctx.moveTo(95, 65);
//   //   ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//   //   ctx.stroke();
//   // }
// // }
//
//
//   duck(){
//     debugger
//     let temp;
//     this.y += this.height - this.width;
//     temp = this.width;
//     this.width = this.height;
//     this.height = temp;
//     this.state = "ducked";
//     this.draw();
//   }
//
//   unduck(){
//     let temp;
//     this.y += this.height - this.width;
//     temp = this.width;
//     this.width = this.height;
//     this.height = temp;
//     this.state = "normal";
//     this.draw();
//   }
//
//   // setToStage(){
//   //   this.stage.addChild(this.player);
//   //   this.stage.update();
//   // }
//   //
//
//
//   // jump(){
//   //   createjs.Tween.get(this.player, { loop: false })
//   //   .to({ y: -100 }, 200, createjs.Ease.getPowInOut(1))
//   //   .to({ y: 0}, 300, createjs.Ease.getPowInOut(1));
//   //   createjs.Ticker.setFPS(60);
//   //   createjs.Ticker.addEventListener("tick", this.stage);
//   // }
// }

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projectile_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ball_js__ = __webpack_require__(4);




class Game {
  constructor(canvas, ctx){
    this.game = this;
    this.player = new __WEBPACK_IMPORTED_MODULE_1__player_js__["a" /* default */](canvas, ctx, this.game);
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
            let proj = new __WEBPACK_IMPORTED_MODULE_0__projectile_js__["a" /* default */](this.canvas, this.ctx, this.game, this.randomY(), this.calcProjVel());
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


/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* unused harmony default export */ var _unused_webpack_default_export = (Ball);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map