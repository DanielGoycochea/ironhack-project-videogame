
addEventListener('keydown', function(e){

  switch(e.keyCode){
      
    case 38: player.moveUp();
    break;
    case 40: player.moveDown();
    break;
    case 37: player.moveLeft();
    break;
    case 39: player.moveRight();
    break;
  }


})