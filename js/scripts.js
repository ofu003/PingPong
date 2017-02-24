//back-end function
var PingPong=function(userInput){
  if (userInput%15==0){
    $(".outputDisplay").text("Ping-Pong");
  }
  else if (userInput%5==0){
    $(".outputDisplay").text("Pong");
  }
  else if (userInput%3==0){
    $(".outputDisplay").text("Ping");
  }
  else{
    $(".outputDisplay").text(userInput);
  }
}
//front-end functions
$(function(){
  $("form#form").submit(function(event){
   event.preventDefault();

   var userInput=$("#input").val();

   PingPong(userInput);
  })
})
