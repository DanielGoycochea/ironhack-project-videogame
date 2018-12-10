let canvas = document.querySelector('#mycanvas')
  let ctx = canvas.getContext('2d')
  
 
  let board = new Board();
  let player = new Player();
  let interval, frames = 0;
  let obstacles = [];
  let obstaclesLobos = [];
  let balas= [];
  let score = 0;
  let life = 3;
  //let lifeLobo = 2
  
  
 
