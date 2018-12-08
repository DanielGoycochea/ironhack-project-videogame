window.onload = function () {
  function update(){
    frames++
    
    generateVampiros()
    generateLobos()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
    player.draw()
    //gameOver()
    drawVampiros()
    drawLobos();
    drawBalas();
    drawBalasIzq()
    drawBalasUp()
    drawBalasDown()
    checkColition()
    drawScore()
    drawlive()
  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }
 

  startGame()
}