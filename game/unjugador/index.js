window.onload = function () {
  function update(){
    frames++
    
    generateVampiros()
    generateLobos()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    // sound.play()
    board.draw()
    player.draw()
    drawVampiros()
    drawLobos();
    drawBalas();
    drawBalasIzq()
    drawBalasUp()
    drawBalasDown()
    checkColition()
    drawScore()
    drawlive()
    gameOver()
    // sound.play()
    // score()
    /*win()*/
  }

  function startGame(){
    interval = setInterval(update, 1000/120)
  }
 

  startGame()
}