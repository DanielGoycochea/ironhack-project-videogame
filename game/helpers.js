function generateVampiros() {
  if(!(frames % 80 === 0)) return
  
  let randomHeight = Math.floor(Math.random() * 650) 
  let vampiro = new Vampiros( randomHeight, canvas.height)
  obstacles.push(vampiro)
 
}
function drawVampiros() {
  obstacles.forEach(function(obstacle) {
  obstacle.draw()
  })
}

function generateLobos() {
  if(!(frames % 80 === 0)) return
  
  let randomHeight = Math.floor(Math.random() * 650) 
  let lobos = new Lobos( randomHeight, canvas.height)
  obstaclesLobos.push(lobos)
 
}
function drawLobos() {
  obstaclesLobos.forEach(function(obstaclesLobos) {
    obstaclesLobos.draw()
  })
}

function generateBalas(){
  let bala = new Bala()
  balas.push(bala);
}

function drawBalas(){
balas.forEach(function(bala){
  bala.draw();
})
  
}

function generateBalasIzq(){
let balaIzq = new BalaIzq()
balas.push(balaIzq);
}

function drawBalasIzq(){
balas.forEach(function(balaIzq){
balaIzq.draw();
})

}

function generateBalasUp(){
  let balaUp = new BalaUp()
  balas.push(balaUp);
  }
  
  function drawBalasUp(){
  balas.forEach(function(balaUp){
  balaUp.draw();
  })
  
  }

  function generateBalasDown(){
    let balaDown = new BalaDown()
    balas.push(balaDown);
    }

    function drawBalasDown(){
    balas.forEach(function(balaDown){
    balaDown.draw();
    })
     }

     function isTouching (a,b){
       return a.x < b.x + b.width-20 &&
              a.x + a.width-20 > b.x &&
              a.y < b.y + b.height-20 &&
              a.y + a.height-20 > b.y;

     }

     function checkColition(){
       balas.forEach(function(bala,bI){
         obstacles.forEach(function (vampiro,vI){
          if (isTouching(bala, vampiro)){
            console.log('muere vampiro')
           obstacles.splice(vI,1)
           balas.splice(bI,1)
            score++
          } });
       });

     

       obstacles.forEach(function(vampiro,vI){
         if (isTouching(vampiro,player)){
          obstacles.splice(vI,1)
          console.log ("me toco el vampiro")
          life--
         }
       })

       balas.forEach(function(bala,bI){
        obstaclesLobos.forEach(function (lobo,lI){
         if (isTouching(bala, lobo)){
           console.log('muere lobo')
            balas.splice(bI,1)
            obstaclesLobos.splice(lI,1)
            score++

         } });
      });
        obstaclesLobos.forEach(function(lobo,lI){
         if (isTouching(lobo,player)){
       console.log ("me toco el Lobo") 
          obstaclesLobos.splice(lI,1)
          life--; 
        }
    }) 
     }
       
  function drawScore(){
    ctx.font = "36px Orbitron";
    ctx.fillStyle = "white";
    ctx.fillText ("MUERTOS: "+score,710,50);
  }

  function drawlive(){
    ctx.font = "36px Orbitron";
    ctx.fillStyle = "white";
    ctx.fillText ("VIDAS: "+life,10,50);
  }
   
  
  function gameOver(){
  
  if (life <= 0){
      clearInterval(interval)
      ctx.font = "bold 40px Orbitron";
	  	ctx.fillStyle = "white";
		  ctx.fillText("GAME OVER!", canvas.height/2, 300);
    }
  }

  /*function win(){
  
    if (score >= 100){
        clearInterval(interval)
        ctx.font = "bold 60px Orbitron";
        ctx.fillStyle = "white";
        ctx.fillText("GANASTE!", canvas.height/2, 300);
      }
    }*/

  	$('#reintentar').click(function(){
      life = 3;
      score = 0;
      obstacles.length = 0;
      obstaclesLobos.length = 0;
      if(clearInterval(interval))
      interval = setInterval(update, 1000/60);
      
    });
     
