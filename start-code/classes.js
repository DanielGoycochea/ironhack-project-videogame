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
     this.y -=  25
   }
   this.moveDown = function(){
    this.y +=  25
  }
  this.moveLeft = function(){
    this.x -=  25
  }
  this.moveRight = function(){
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


function Disparos(){
  this.x = player.x;
  this.y =  player.y;
  this.width = 20;
  this.height = 20;
  this.img = new Image()
  
}

