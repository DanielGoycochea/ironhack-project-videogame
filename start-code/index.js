window.onload = function () {
  function update(){
    frames++
    
    generateVampiros()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
    player.draw()
    drawVampiros()
    

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }


  startGame()
}