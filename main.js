$(document).ready(function(){
  console.log( "ready!" );
})


function instrucciones(){
  $("#boton-player1").addClass("none")
 $("#boton-player2").addClass("none")
 $("#boton-jugar").addClass("none")
 $(".santoTraje").addClass("none")
 $("#boton-regresar").addClass("none")
 $("#boton-instrucciones").addClass("none");
 $("#boton-regresar2").removeClass("none")
 $(".instrucciones").removeClass("none")
}
function regresar(){
  $("#boton-instrucciones").addClass("none");
  $("#boton-jugar").addClass("none")
  $("#boton-regresar").addClass("none")
  $("#boton-player1").removeClass("none")
  $("#boton-player2").removeClass("none")
 
}
function regresar2(){
  $("#boton-jugar").removeClass("none")
  $(".santoTraje").removeClass("none")
  $("#boton-instrucciones").removeClass("none");
  $("#boton-regresar2").addClass("none")
  $(".instrucciones").addClass("none")
  $("#boton-regresar").removeClass("none")
 
}
function unJugador(){
 $("#boton-instrucciones").removeClass("none");
 $("#boton-jugar").removeClass("none")
 $("#boton-regresar").removeClass("none")
 $("#boton-player1").addClass("none")
 $("#boton-player2").addClass("none")
}