//back-end function
var PingPong=function(userInput){
  arr = [];
  for (var i=1; i<=userInput; i++){
    arr.push(i);
    $(".outputDisplay").text(arr);
  }

  // if (userInput%15==0){
  //   $(".outputDisplay").show();
  //   $(".outputDisplay").text("Ping-Pong");
  // }
  // else if (userInput%5==0){
  //   $(".outputDisplay").show();
  //   $(".outputDisplay").text("Pong");
  // }
  // else if (userInput%3==0){
  //   $(".outputDisplay").show();
  //   $(".outputDisplay").text("Ping");
  // }
  // else{
  //   $(".outputDisplay").show();
  //   $(".outputDisplay").text(userInput);
  // }
}
//front-end functions
$(function(){
  $("form#form").submit(function(event){
   event.preventDefault();

   var userInput=$("#input").val();

   PingPong(userInput);

   $("#reset").show();

    $("#reset").click(function(){
      userInput="";
      $(".outputDisplay").hide();
    })
  })
})
