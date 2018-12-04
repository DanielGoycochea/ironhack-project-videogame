
addEventListener('keydown', function(e){
   
  if (e.keyCode===38){
     player.moveUp()
     

   }else if (e.keyCode===40){
    player. moveDown()
   }

    else if(e.keyCode===37){
      player.moveLeft()
    }
    else if(e.keyCode===39){
      player.moveRight()
    }
    else if(e.keyCode===68){
      generateBalas();
    }

    else if(e.keyCode===65){
      generateBalasIzq();
    }

    else if(e.keyCode===87){
      generateBalasUp();
    }
    else if(e.keyCode===83){
      generateBalasDown();
    }

  /*switch(e.keyCode){
      
    case 38: player.moveUp();
    if (player.y < -5) {
	    player.y = -5;
	  }
    break;
    case 40: player.moveDown();
    if (player.y > 650) {
	    player.y = 650;
	  }
    break;
    case 37: player.moveLeft();
    if (player.x < 0) {
	    player.x = 0;
	  }
    break;
    case 39: player.moveRight();
    if (player.x > 950) {
	    player.x = 950;
	  }
    break;
    case 68: balas.dispara();
    
    break;
  
  }*/
})