$(document).ready(function(){
  console.log( "ready!" );
})

function jugar(){
  $(".botones2").removeClass("none");
  $(".botones").addClass("none");
  $(".santoTraje").addClass("none")
}
function instrucciones(){
  $(".botones2").addClass("none");
  $(".instrucciones").removeClass("none");
  $("#boton-regresar").removeClass("none");
}
function regresar(){
  $(".botones2").removeClass("none");
  $(".instrucciones").addClass("none");
  $("#boton-regresar").addClass("none");
  $(".botones3").addClass ("none")
}
function unJugador(){
  $(".botones2").addClass("none");
  $(".botones3").removeClass("none")
  $("#nivel").removeClass("none");
}
function creditos(){
  $(".botones2").addClass("none");
  

}