addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowUp":
      player.moveUp();
      break;
    case "ArrowDown":
      player.moveDown();
      break;
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
    case "a":
      generateBalasIzq();
      player.moveLeft();
      break;
    case "w":
      generateBalasUp();
      break;
    case "s":
      generateBalasDown();
      break;
    case "d":
      generateBalas();
      player.moveRight();
      break;
    default:
      break;
  }
});
