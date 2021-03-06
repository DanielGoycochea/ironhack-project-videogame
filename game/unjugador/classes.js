function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src = '../../Images/fondo_azul.png'

  this.img.onload = function(){
    this.draw()
  }.bind(this)
  this.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   
  }
 }


 function Player(){
   this.x = 450;
   this.y = 300;
   this.width = 80; 
   this.height = 80; 
   this.img = new Image()
   this.img.src = '../../Images/santo.png'
   this.img.onload = function(){
     this.draw()
   }.bind(this)
   this.moveUp = function(){
     if(this.y > 0)
    this.y -=  25
   }
   this.moveDown = function(){
    if(this.y < 620)
    this.y +=  25
     }
  this.moveLeft = function(){
    this.img = new Image()
    this.img.src = '../../Images/santo_izq.png'
    if(this.x > 0)
    this.x -=  25
  }
  this.moveRight = function(){
    this.img = new Image()
    this.img.src = '../../Images/santo.png'
    if(this.x < 920)
    this.x +=  25
 }
   this.draw = function () {
    
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   }

 }

function Vampiros( y, type){
  this.x = 0
  this.y = y
  this.width = 80
  this.height = 80
  this.img = new Image()
  this.img.src = '../../Images/vampiro.png'
  this.img2 = new Image();
  this.img2.src = '../../Images/vampiroalas.png' 
  this.anima = true;
  this.draw = function(){
  this.anima = !this.anima;
  this.x++;
    if(type){
      if(this.anima){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }else{
        ctx.drawImage(this.img2, this.x, this.y,this.width, this.height)
      }
    }
       
  }

}

function Lobos( y, type){
  this.x = canvas.width
  this.y = y
  this.width = 80
  this.height = 80
  this.img = new Image()
  this.img.src = '../../Images/hombre_lobo2.png'
  this.img2 = new Image()
  this.img2.src= '../../Images/hombre1.png'
  this.anima = true  
  this.draw = function(){
    this.anima = !this.anima;
    this.x--;
    if(type){
      if(this.anima){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }else{
        ctx.drawImage(this.img2, this.x, this.y, this.width, this.height )
      }
    }
    
  }

}
function Momia( y ){
  this.x = canvas.width
  this.y = y
  this.width = 130
  this.height = 130
  this.img = new Image()
  this.img.src = '../../Images/momia.png'
  this.anima = true  
  this.draw = function(){
    this.anima = !this.anima;
    this.x--;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

function Bala(){
  this.x = player.x + 50;
  this.y =  player.y+ 40;
  this.width = 20;
  this.height = 20;
  this.bala = new Image()
  this.bala.src ="../../Images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.x+=5;
      ctx.drawImage(this.bala,this.x, this.y, this.width, this.height)
  }
  
}

function BalaIzq(){
  this.x = player.x + 50;
  this.y =  player.y+ 40;
  this.width = 20;
  this.height = 20;
  this.balaIzq = new Image()
  this.balaIzq.src ="../../Images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.x-=5;
      ctx.drawImage(this.balaIzq,this.x, this.y, this.width, this.height)
  }
  
}

function BalaUp(){
  this.x = player.x + 50;
  this.y =  player.y+ 40;
  this.width = 20;
  this.height = 20;
  this.balaUp = new Image()
  this.balaUp.src ="../../Images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.y-=5;
      ctx.drawImage(this.balaUp,this.x, this.y, this.width, this.height)
  }
  
}

function BalaDown(){
  this.x = player.x + 50;
  this.y =  player.y+ 40;
  this.width = 20;
  this.height = 20;
  this.balaDown = new Image()
  this.balaDown.src ="../../Images/Bill_Bala_New_Super_Mario_Bros..png";
  this.draw = function (){
      this.y+=5;
      ctx.drawImage(this.balaDown,this.x, this.y, this.width, this.height)
  }
  
}

