function generateVampiros() {
  if(!(frames % 100 === 0)) return
  
  let randomHeight = Math.floor(Math.random() * 650) 
  let vampiro = new Vampiros( randomHeight, canvas.height)
  
  obstacles.push(vampiro)
 
}
function drawVampiros() {
  obstacles.forEach(function(obstacle) {
    obstacle.draw()
  })
}
