function init() {
  // all defined variables
  const scoreSpan = document.querySelector(".score");
  width = 28;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
  const squares = [];

  // create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot", i);
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall", i);
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair", i);
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet", i);
      } else if (layout[i] === 4) {
        squares[i].classList.add(i);
      }
    }
  }
  createBoard();

  // add PacMan to the grid
  let pacManPosition = 490;
  function createPacMan() {
    squares[pacManPosition].classList.add("pac-man");
  }

  createPacMan();

  // move PacMan
  function pacManMove() {
    document.addEventListener("keyup", (event) => {
      squares[pacManPosition].classList.remove("pac-man");
      // teleportation from left to right
      if (event.keyCode === 37 && pacManPosition === 364) {
        pacManPosition = 391;
        // move left
      } else if (
        event.keyCode === 37 &&
        !squares[pacManPosition - 1].classList.contains("wall") &&
        !squares[pacManPosition - 1].classList.contains("ghost-lair")
      ) {
        squares[(pacManPosition -= 1)].classList.add("pac-man");
      }
      // teleportation from right to left
      if (event.keyCode === 39 && pacManPosition === 391) {
        pacManPosition = 364;
        // move right
      } else if (
        event.keyCode === 39 &&
        !squares[pacManPosition + 1].classList.contains("wall") &&
        !squares[pacManPosition + 1].classList.contains("ghost-lair")
      ) {
        squares[(pacManPosition += 1)].classList.add("pac-man");
      }
      // move up
      if (
        event.keyCode === 38 &&
        !squares[pacManPosition - width].classList.contains("wall") &&
        !squares[pacManPosition - width].classList.contains("ghost-lair")
      ) {
        squares[(pacManPosition -= width)].classList.add("pac-man");
      }
      // move down
      if (
        event.keyCode === 40 &&
        !squares[pacManPosition + width].classList.contains("wall") &&
        !squares[pacManPosition + width].classList.contains("ghost-lair")
      ) {
        squares[(pacManPosition += width)].classList.add("pac-man");
      }

      squares[pacManPosition].classList.add("pac-man");
      console.log(pacManPosition);
      console.log("score", score);
      pacManEatDot();
      pacManEatPowerPellet();
      pacManEatGhost();
      gameOver();
    });
  }
  pacManMove();

  function pacManEatGhost() {
    if (
      squares[pacManPosition].classList.contains("blinky") &&
      ghostsScared === true
    ) {
      setTimeout(() => {
        moveGhost();
      }, 4000);
      squares[pacManPosition].classList.remove("ghosts-scared");
      squares[pacManPosition].classList.remove("blinky");
      clearInterval(timer);
      // blinkyPosition = 293;
      // squares[pacManPosition].classList.remove("ghosts-scared");
      // console.log("zawiera pinky");
      score += 50;
    }
  }

  // PacMan eat dot
  let score = 0;
  function pacManEatDot() {
    if (squares[pacManPosition].classList.contains("pac-dot")) {
      squares[pacManPosition].classList.remove("pac-dot");
      score += 1;
      scoreSpan.textContent = score;
    }
  }

  function pacManEatPowerPellet() {
    if (squares[pacManPosition].classList.contains("power-pellet")) {
      squares[pacManPosition].classList.remove("power-pellet");
      ghostsScared = true;
      setTimeout(ghostUnscared, 15000);
      score += 10;
      scoreSpan.textContent = score;
    }
  }
  //ghost scared
  let ghostsScared = false;

  function ghostUnscared() {
    ghostsScared = false;
  }
  //creat ghost
  let blinkyPosition = 348; //495//; //348
  let pinkyPosition = 404;
  let inkyPosition = 351;
  let clydePosition = 407;

  function createGhost() {
    squares[blinkyPosition].classList.add("blinky");
    squares[pinkyPosition].classList.add("pinky");
    squares[inkyPosition].classList.add("inky");
    squares[clydePosition].classList.add("clyde");
  }
  // createGhost();
  function test() {
    setTimeout(() => {
      blinkyPosition = 349;
      squares[348].classList.remove("blinky");
      setTimeout(() => {
        squares[349].classList.remove("blinky");
        blinkyPosition = 321;
        setTimeout(() => {
          squares[321].classList.remove("blinky");
          blinkyPosition = 293;
        }, 1000);
      }, 1000);
    }, 1000);
  }

  let timer = NaN;
  // move ghost
  function moveGhost() {
    const directions = [-1, +1, -width, +width];

    // setTimeout(() => {
    //   blinkyPosition = 321;
    //   squares[348].classList.remove("blinky");
    // }, 1000);
    setTimeout(() => {
      squares[348].classList.add("blinky");
      setTimeout(() => {
        squares[349].classList.add("blinky");
        squares[348].classList.remove("blinky");
        setTimeout(() => {
          squares[349].classList.remove("blinky");
          squares[321].classList.add("blinky");
          setTimeout(() => {
            squares[321].classList.remove("blinky");
            squares[293].classList.add("blinky");
          }, 500);
        }, 500);
      }, 500);
    }, 500);

    setTimeout(() => {
      blinkyPosition = 293;
      timer = setInterval(() => {
        // blinkyPosition = 293;
        let direction =
          directions[Math.floor(Math.random() * directions.length)];

        if (
          !squares[blinkyPosition + direction].classList.contains("wall") &&
          !squares[blinkyPosition + direction].classList.contains("ghost-lair")
        ) {
          squares[blinkyPosition].classList.remove("blinky");
          squares[blinkyPosition].classList.remove("ghosts-scared");

          blinkyPosition += direction;

          squares[blinkyPosition].classList.add("blinky");

          if (!ghostsScared === false) {
            squares[blinkyPosition].classList.add("ghosts-scared");
          }
        }
      }, 150);
    }, 2000);
    // createGhost();
  }
  setTimeout(() => {
    moveGhost();
  }, 2000);
  // moveGhost();
  createGhost();

  function gameOver() {
    if (squares[pacManPosition].classList.contains("blinky")) {
      console.log("game over");
      alert("gama over");
    }
  }
}
window.onload = init;
