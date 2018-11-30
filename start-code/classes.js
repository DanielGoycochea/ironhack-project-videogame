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
   this.img.src = 'https://t2.rbxcdn.com/5a8c15ef2d42af9eb1b8da8a58268e3d'
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
    this.img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-9TmsMZIqCHIy-UsQW8ubqrNyTkW1ynnAQDmjfe831ONlvdn8g' 
  
  this.draw = function(){
    this.x--;
    if(type){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
  }
}

