window.onload = function () {
  function update(){
    frames++
    
    generateVampiros()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
    player.draw()
    //gameOver()
    drawVampiros()
    drawBalas();
    drawBalasIzq()
    drawBalasUp()
    drawBalasDown()
    checkColition()
  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }
  /*function gameOver() {
    if(checkColition() ){
      clearInterval(interval)
      interval = 0
      ctx.font = "30px Arial";
      ctx.fillText("Game Over",10,50);
    } 
  }*/

  startGame()
}