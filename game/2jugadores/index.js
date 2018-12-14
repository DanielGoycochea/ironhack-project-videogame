window.onload = function () {
  function update(){
    frames++
    
    generateVampiros()
    generateLobos()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
    player.draw()
    player2.draw()
    drawVampiros()
    drawLobos();
    drawBalas();
    drawBalasIzq()
    checkColition()
    drawScore()
    drawlive()
    gameOver()
    /*win()*/
  }

  function startGame(){
    interval = setInterval(update, 1000/120 )
  }
 

  startGame()
}