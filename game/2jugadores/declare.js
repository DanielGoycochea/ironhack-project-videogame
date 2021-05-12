let canvas = document.querySelector('#mycanvas')
  let ctx = canvas.getContext('2d')
  
 
  let board = new Board();
  let player = new Player();
  let player2 = new Player2();
  let interval, frames = 0;
  let obstacles = [];
  let obstaclesLobos = [];
  let obstaclesMomia = [];
  let balas= [];
  let score = 0;
  let life = 5;
  
  //let lifeLobo = 2
  
  
 
