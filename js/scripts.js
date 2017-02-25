//back-end
$(function(){
  var PingPong=function(userInput){
  arr = [];
  for (var i=1; i<=userInput; i++){
  arr.push(i);
  console.log(arr);
  }

    arr.forEach(function(i){
      if (i%15==0){
        $(".outputDisplay").show();
        $(".outputDisplay").append("<li>" + "Ping-Pong" + "</li>");
      }
      else if (i%5==0){
        $(".outputDisplay").show();
        $(".outputDisplay").append("<li>" + "Pong" + "</li>");
      }
      else if (i%3==0){
        $(".outputDisplay").show();
        $(".outputDisplay").append("<li>" + "Ping" + "</li>");
      }
      else{
        $(".outputDisplay").show();
        $(".outputDisplay").append("<li>" + i + "</li>");
      }
    })
  }
//front-end functions
  $("form#form").submit(function(event){
    event.preventDefault();

    var userInput=$("#input").val();

    PingPong(userInput);

    $("#reset").show();

    $("#reset").click(function(){
      userInput="";
      arr=[];
      $(".outputDisplay").text(arr);
    })
  })
});
