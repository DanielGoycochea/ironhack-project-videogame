function generateVampiros() {
  if (!(frames % 100 === 0)) return;

  let randomHeight = Math.floor(Math.random() * 650);
  let vampiro = new Vampiros(randomHeight, canvas.height);
  obstacles.push(vampiro);
}
function drawVampiros() {
  obstacles.forEach(function (obstacle) {
    obstacle.draw();
  });
}

function generateLobos() {
  if (!(frames % 100 === 0)) return;

  let randomHeight = Math.floor(Math.random() * 650);
  let lobos = new Lobos(randomHeight, canvas.height);
  obstaclesLobos.push(lobos);
}
function drawLobos() {
  obstaclesLobos.forEach(function (obstaclesLobos) {
    obstaclesLobos.draw();
  });
}
function generateMomia() {
  if (!(frames % 100 === 0)) return;
  let randomHeight = Math.floor(Math.random() * 650);
  let momia = new Momia(randomHeight, canvas.height);
  obstaclesMomia.push(momia);
}
function drawMomia() {
  obstaclesMomia.forEach(function (obstaclesMomia) {
    obstaclesMomia.draw();
  });
}

function generateBalas() {
  let bala = new Bala();
  balas.push(bala);
}

function drawBalas() {
  balas.forEach(function (bala) {
    bala.draw();
  });
}

function generateBalasIzq() {
  let balaIzq = new BalaIzq();
  balas.push(balaIzq);
}

function drawBalasIzq() {
  balas.forEach(function (balaIzq) {
    balaIzq.draw();
  });
}

function generateBalasUp() {
  let balaUp = new BalaUp();
  balas.push(balaUp);
}

function drawBalasUp() {
  balas.forEach(function (balaUp) {
    balaUp.draw();
  });
}

function generateBalasDown() {
  let balaDown = new BalaDown();
  balas.push(balaDown);
}

function drawBalasDown() {
  balas.forEach(function (balaDown) {
    balaDown.draw();
  });
}

function isTouching(a, b) {
  return (
    a.x < b.x + b.width - 20 &&
    a.x + a.width - 20 > b.x &&
    a.y < b.y + b.height - 20 &&
    a.y + a.height - 20 > b.y
  );
}

function checkColition() {
  obstacles.forEach(function (vampiro, vI) {
    if (isTouching(vampiro, player)) {
      obstacles.splice(vI, 1);
      life--;
    }
  });
  obstaclesMomia.forEach(function (lobo, lI) {
    if (isTouching(lobo, player)) {
      obstaclesMomia.splice(lI, 1);
      life--;
    }
  });
  obstaclesLobos.forEach(function (lobo, lI) {
    if (isTouching(lobo, player)) {
      obstaclesLobos.splice(lI, 1);
      life--;
    }
  });
  balas.forEach(function (bala, bI) {
    obstaclesMomia.forEach(function (momia, mI) {
      if (isTouching(bala, momia)) {
        balas.splice(bI, 1);
        obstaclesMomia.splice(mI, 1);
        score++;
      }
    });
    obstaclesLobos.forEach(function (lobo, lI) {
      if (isTouching(bala, lobo)) {
        balas.splice(bI, 1);
        obstaclesLobos.splice(lI, 1);
        score++;
      }
    });
    obstacles.forEach(function (vampiro, vI) {
      if (isTouching(bala, vampiro)) {
        obstacles.splice(vI, 1);
        balas.splice(bI, 1);
        score++;
      }
    });
  });
}

function drawScore() {
  ctx.font = "36px Orbitron";
  ctx.fillStyle = "white";
  ctx.fillText("MUERTOS: " + score, 680, 50);
}

function drawlive() {
  ctx.font = "36px Orbitron";
  ctx.fillStyle = "white";
  ctx.fillText("VIDAS: " + life, 30, 50);
}

function gameOver() {
  let puntajes = [];
  let handleAudio = document.getElementById("sound");
  if (life <= 0) {
    clearInterval(interval);
    ctx.font = "bold 40px Orbitron";
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER!", canvas.height / 2 + 20, 300);
    puntajes.push(score);
    handleAudio.setAttribute("src", "../../music/Mario-Muerte.mp3");
  }
}
