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

export default Player;
