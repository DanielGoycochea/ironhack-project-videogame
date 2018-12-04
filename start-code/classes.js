function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src = 'Images/PixelArt.png'

  this.img.onload = function(){
    this.draw()
  }.bind(this)
  this.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   
  }
 }


 function Player(){
   this.x = 150;
   this.y = 150;
   this.width = 50; 
   this.height = 50; 
   this.img = new Image()
   this.img.src = 'Images/PixelArt1.png'
   this.img.onload = function(){
     this.draw()
   }.bind(this)
   this.moveUp = function(){
     if(this.y > 0)
    this.y -=  25
   }
   this.moveDown = function(){
    if(this.y < 650)
    this.y +=  25
     }
  this.moveLeft = function(){
    
    if(this.x > 0)
    this.x -=  25
  }
  this.moveRight = function(){
    if(this.x < 950)
   this.x +=  25
 }

   this.draw = function () {
    
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   }

 }

function Vampiros( y, type){
  this.x = canvas.width
  this.y = y
  this.width = 50
  this.height = 50
  this.img = new Image()
  this.img.src = 'Images/kisspng-vampire-bat-drawing-deviantart-vampires-5ab61373459240.101752611521881971285.png' 
  
  this.draw = function(){
    this.x--;
    if(type){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
  }
}


function Bala(){
  this.x = player.x + 40;
  this.y =  player.y+ 15;
  this.width = 20;
  this.height = 20;
  this.bala = new Image()
  this.bala.src ="images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.x+=5;
      ctx.drawImage(this.bala,this.x, this.y, this.width, this.height)
  }
  
}

function BalaIzq(){
  this.x = player.x + 40;
  this.y =  player.y+ 15;
  this.width = 20;
  this.height = 20;
  this.balaIzq = new Image()
  this.balaIzq.src ="images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.x-=5;
      ctx.drawImage(this.balaIzq,this.x, this.y, this.width, this.height)
  }
  
}

function BalaUp(){
  this.x = player.x + 40;
  this.y =  player.y+ 15;
  this.width = 20;
  this.height = 20;
  this.balaUp = new Image()
  this.balaUp.src ="images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.y-=5;
      ctx.drawImage(this.balaUp,this.x, this.y, this.width, this.height)
  }
  
}

function BalaDown(){
  this.x = player.x + 40;
  this.y =  player.y+ 15;
  this.width = 20;
  this.height = 20;
  this.balaDown = new Image()
  this.balaDown.src ="images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.y+=5;
      ctx.drawImage(this.balaDown,this.x, this.y, this.width, this.height)
  }
  
}