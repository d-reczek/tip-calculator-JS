function init() {
  // variable for grid
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
      pacManEatDot();
      pacManEatPowerPellet();
      pacManEatGhostBlinky();
      pacManEatGhostInky();
      gameOver();
      win();
    });
  }
  pacManMove();

  // PacMan eat ghost Blinky

  function pacManEatGhostBlinky() {
    if (
      squares[pacManPosition].classList.contains("blinky") &&
      ghostsScared === true
    ) {
      setTimeout(() => {
        moveGhostBlinky();
      }, 4000);
      squares[pacManPosition].classList.remove("ghosts-scared");
      squares[pacManPosition].classList.remove("blinky");
      clearInterval(timerBlinky);
      score += 20;
    }
  }
  function pacManEatGhostInky() {
    if (
      squares[pacManPosition].classList.contains("inky") &&
      ghostsScared === true
    ) {
      setTimeout(() => {
        moveGhostInky();
      }, 4000);
      squares[pacManPosition].classList.remove("ghosts-scared");
      squares[pacManPosition].classList.remove("inky");
      clearInterval(timerInky);
      score += 20;
    }
  }

  // PacMan eat dot
  let score = 0;
  let pointsToWin = 0;
  function pacManEatDot() {
    if (squares[pacManPosition].classList.contains("pac-dot")) {
      squares[pacManPosition].classList.remove("pac-dot");
      pointsToWin += 1;
      score += 1;
      scoreSpan.textContent = score;
    }
  }

  function pacManEatPowerPellet() {
    if (squares[pacManPosition].classList.contains("power-pellet")) {
      squares[pacManPosition].classList.remove("power-pellet");
      ghostsScared = true;
      setTimeout(ghostUnscared, 15000);
      pointsToWin += 1;
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

  const blinkySpeed = 300;
  const pinkySpeed = 350;
  const inkySpeed = 200;

  function createGhost() {
    squares[blinkyPosition].classList.add("blinky");
    squares[pinkyPosition].classList.add("pinky");
    squares[inkyPosition].classList.add("inky");
    squares[clydePosition].classList.add("clyde");
  }
  createGhost();
  const startDelay = 500;

  let timerBlinky = NaN;

  // move ghost Blinky
  function moveGhostBlinky() {
    const directions = [-1, +1, -width, +width];

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
          }, startDelay);
        }, startDelay);
      }, startDelay);
    }, startDelay);

    setTimeout(() => {
      blinkyPosition = 293;
      timerBlinky = setInterval(() => {
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
          if (
            squares[blinkyPosition].classList.contains("pac-man") &&
            ghostsScared === false
          ) {
            console.log("game over");
            alert("gama over");
          }
        }
      }, blinkySpeed);
    }, startDelay * 4);
  }
  // setTimeout(() => {
  //   moveGhostBlinky();
  // }, 2000);

  let timerInky = NaN;

  // move ghost Inky
  function moveGhostInky() {
    const directions = [-1, +1, -width, +width];

    setTimeout(() => {
      squares[351].classList.add("inky");
      setTimeout(() => {
        squares[350].classList.add("inky");
        squares[351].classList.remove("inky");
        setTimeout(() => {
          squares[350].classList.remove("inky");
          squares[322].classList.add("inky");
          setTimeout(() => {
            squares[322].classList.remove("inky");
            squares[294].classList.add("inky");
          }, startDelay);
        }, startDelay);
      }, startDelay);
    }, startDelay);

    setTimeout(() => {
      inkyPosition = 294;
      timerInky = setInterval(() => {
        let direction =
          directions[Math.floor(Math.random() * directions.length)];

        if (
          !squares[inkyPosition + direction].classList.contains("wall") &&
          !squares[inkyPosition + direction].classList.contains("ghost-lair")
        ) {
          squares[inkyPosition].classList.remove("inky");
          squares[inkyPosition].classList.remove("ghosts-scared");

          inkyPosition += direction;

          squares[inkyPosition].classList.add("inky");

          if (!ghostsScared === false) {
            squares[inkyPosition].classList.add("ghosts-scared");
          }
          if (
            squares[inkyPosition].classList.contains("pac-man") &&
            ghostsScared === false
          ) {
            console.log("game over");
            alert("gama over");
          }
        }
      }, inkySpeed);
    }, startDelay * 4);
  }

  let timerPinky = NaN;

  // move ghost Pinky
  function moveGhostPinky() {
    const directions = [-1, +1, -width, +width];

    setTimeout(() => {
      squares[404].classList.add("pinky");
      setTimeout(() => {
        squares[405].classList.add("pinky");
        squares[404].classList.remove("pinky");
        setTimeout(() => {
          squares[405].classList.remove("pinky");
          squares[377].classList.add("pinky");
          setTimeout(() => {
            squares[377].classList.remove("pinky");
            squares[349].classList.add("pinky");
            setTimeout(() => {
              squares[349].classList.remove("pinky");
              squares[321].classList.add("pinky");
              setTimeout(() => {
                squares[321].classList.remove("pinky");
                squares[293].classList.add("pinky");
              }, startDelay);
            }, startDelay);
          }, startDelay);
        }, startDelay);
      }, startDelay);
    }, startDelay);

    setTimeout(() => {
      pinkyPosition = 293;
      timerInky = setInterval(() => {
        let direction =
          directions[Math.floor(Math.random() * directions.length)];

        if (
          !squares[pinkyPosition + direction].classList.contains("wall") &&
          !squares[pinkyPosition + direction].classList.contains("ghost-lair")
        ) {
          squares[pinkyPosition].classList.remove("pinky");
          squares[pinkyPosition].classList.remove("ghosts-scared");

          pinkyPosition += direction;

          squares[pinkyPosition].classList.add("pinky");

          if (!ghostsScared === false) {
            squares[pinkyPosition].classList.add("ghosts-scared");
          }
          if (
            squares[pinkyPosition].classList.contains("pac-man") &&
            ghostsScared === false
          ) {
            console.log("game over");
            alert("gama over");
          }
        }
      }, pinkySpeed);
    }, startDelay * 6);
  }

  // // delay of Blinky
  setTimeout(() => {
    moveGhostBlinky();
  }, 2000);

  // // delay of Inky
  setTimeout(() => {
    moveGhostInky();
  }, 4000);

  // // // delay of Pinky
  setTimeout(() => {
    moveGhostPinky();
  }, 6000);

  // // delay of Clyde
  // setTimeout(() => {
  //   moveGhostClyde();
  // }, 8000);

  // how to win

  const winPoints = 238;
  function win() {
    if (pointsToWin === winPoints) {
      alert("wygrales");
    }
  }

  // how to lose
  function gameOver() {
    if (squares[pacManPosition].classList.contains("blinky")) {
      console.log("game over");
      alert("gama over");
    }
  }
}
window.onload = init;
