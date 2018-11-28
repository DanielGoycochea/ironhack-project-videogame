window.onload = function() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  
  var jugador={
    x: 0,
    y: 0,
    moveUp: function (){this.y -= 25},
    moveDown: function(){this.y +=25},
    moveLeft: function(){this.x -=25},
    moveRight: function(){this.x +=25},
  }

  document.onkeydown = function(e){
    switch(e.keyCode){
      
      case 38: jugador.moveUp();
      break;
      case 40: jugador.moveDown();
      break;
      case 37: jugador.moveLeft();
      break;
      case 39: jugador.moveRight();
      break;
    }
    updateCanvas();
  }

function draw (jugador){
var img = new Image();
img.onload =function(){
  ctx.drawImage(img, jugador.x, jugador.y,50,50);
}
img.src ="https://t2.rbxcdn.com/5a8c15ef2d42af9eb1b8da8a58268e3d"
}

function updateCanvas(){
ctx.clearRect (0,0, 1500,1700);
draw (jugador)
}
draw (jugador)
}
