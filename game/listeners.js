
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

})