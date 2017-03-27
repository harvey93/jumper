## Jumper

### Background

Jumper is a basic JavaScript game. The player is running while objects are objects are being hurled at him from the other side of the screen. The goal of the game is to survive.

### Functionality And MVP

Jumper Features:

- [ ] Lose game if hit by an incoming object
- [ ] Players can jump to avoid objects that are low
- [ ] Players can duck to ovoid objects that high
- [ ] Difficulty increases as player survives longer

In addition, this project will include:

- [ ] Instructions modal  
- [ ] A production Readme

### Wireframes

This app includes a single screen with the instructions that can be made visible through a modal and the game board. Players will see how long they have survived on the top right of their screen. They will press the up button in order to jump over the objects that are coming at them and press down to duck and avoid objects at a higher position. Every 15 seconds, the rate at which objects appear will increase.

![wireframes](wireframes/home.png)

![wireframes](wireframes/modal.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`projectile.js`: this script will handle all of the logic for the objects that will be coming to collide with the player. Its velocity and positioning will be a part of the constructor.

`player.js`: this script will handle the player, its movement options, as well as collision detection.

### Implementation Timeline
**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element


**Day 2**: Dedicate this day to learning the Easel.js API. Build out the player object, board, projectile object.

**Day 3**: Get the objects to appear and move with a specific velocity from right to left. Add collision detection.

**Day 4**: Add ability to jump and duck to avoid different objects. Style the frontend and make it look nice. Add modal for instructions.


### Bonus features

There are many directions this this project  could eventually go.  Some anticipated updates are:

- [ ] Add ability to pick up coins in order to increase score
- [ ] Add double jump
- [ ] Add side to side movement for player
