
addEventListener('keydown', function(e){


  switch(e.keyCode){
      
    case 38: player.moveUp();
    if (player.y < 0) {
	    player.y = 0;
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
  }


})