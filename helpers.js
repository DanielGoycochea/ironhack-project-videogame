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
       return a.x < b.x + b.width &&
              a.x + a.width > b.x &&
              a.y < b.y + b.height &&
              a.y + a.height > b.y;

     }

     function checkColition(){
       balas.forEach(function(bala){
         obstacles.forEach(function (vampiro){
          if (isTouching(bala, vampiro)){
            console.log('muere vampiro')
           /* balas.splice (index,1);
            obstacles.splice(index,1);*/

          } });
       });

       obstacles.forEach(function(vampiro){
         if (isTouching(vampiro,player)){
          console.log ("me toco el vampiro")


         }
       })
     }

  
   /* function checkColitionbalas(obstacle){
     if (balas.isTouching(obstacle)) console.log("ahi vas")}*/