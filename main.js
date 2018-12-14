$(document).ready(function(){
  console.log( "ready!" );
});


function instrucciones(){
 $("#boton-player1").addClass("none")
 $("#boton-player2").addClass("none")
 $("#boton-jugar").addClass("none")
 $(".santoTraje").addClass("none")
 $("#boton-regresar").addClass("none")
 $("#boton-instrucciones").addClass("none");
 $("#boton-regresar2").removeClass("none")
 $(".instrucciones").removeClass("none")
 $("#boton-jugar2").addClass("none")
}
function regresar(){
  $("#boton-instrucciones").addClass("none");
  $("#boton-jugar").addClass("none")
  $("#boton-regresar").addClass("none")
  $("#boton-player1").removeClass("none")
  $("#boton-player2").removeClass("none")
  $("#boton-jugar2").addClass("none")
  $(".sybTraje").addClass("none")
    $(".santoTraje").removeClass("none")
  $("#boton-jugar2").addClass("none")
  
  $("#boton-instruccionessyb").addClass("none");
 
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
function dosJugador(){
  $("#boton-instruccionessyb").removeClass("none");
  $("#boton-jugar2").removeClass("none")
  $("#boton-regresar").removeClass("none")
  $("#boton-player1").addClass("none")
  $("#boton-player2").addClass("none")
  $(".sybTraje").removeClass("none")
  $(".santoTraje").addClass("none")
  
 }
 function instruccionessyb(){
  $(".sybTraje").addClass("none")
  $("#boton-instruccionessyb").addClass("none");
  $("#boton-jugar2").addClass("none");
  $("#boton-regresar").addClass("none")
  $("#instruccionessyb").removeClass("none")
  $("#boton-regresar3").removeClass("none")
  
   
  }
  function regresar3(){
    $("#instruccionessyb").addClass("none");
    $("#boton-instruccionessyb").removeClass("none");
    $("#boton-jugar2").removeClass("none");
    $(".sybTraje").removeClass("none")
    $("#boton-regresar3").addClass("none")
    $("#boton-regresar").removeClass("none")
  }
  
