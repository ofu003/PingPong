var PingPong=function(userInput){
  if (userInput%3==0){
    $(".outputDisplay").text("Ping");
  }
  else{
    $(".outputDisplay").text(userInput);
  }

}


$(function(){
  $("form#form").submit(function(event){
   event.preventDefault();

   var userInput=$("#input").val();

   PingPong(userInput);
  })
})
