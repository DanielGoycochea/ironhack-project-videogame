
addEventListener('keydown', function(e){
   
  if (e.keyCode===87){
     player.moveUp()
  
   }else if (e.keyCode===83){
    player. moveDown()
   }

    else if(e.keyCode===65){
      player.moveLeft()
    }
    else if(e.keyCode===68){
      player.moveRight()
    }
    else if(e.keyCode===71){
      generateBalas();
    }

    
    if (e.keyCode===38){
      player2.moveUp()
   
    }else if (e.keyCode===40){
     player2. moveDown()
    }
 
     else if(e.keyCode===37){
       player2.moveLeft()
     }
     else if(e.keyCode===39){
       player2.moveRight()
     }
      
     else if(e.keyCode===32){
       generateBalasIzq();
     }
 
    

})