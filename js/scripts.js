//back-end
  var PingPong=function(userInput){
  arr = [];
  for (var i=1; i<=userInput; i++){
  arr.push(i);
  //console.log(arr);
  }

    arr.forEach(function(i){
      if (i%15==0){
        //index at i
        //make it a pingpong variable
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

//front-end
$(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    //store input as variable
    var userInput=$("#input").val();
    //cars function for different behaviors
    PingPong(userInput);
    //reset function
    $("#reset").show();
    $("#reset").click(function(){
      userInput="";
      arr=[];
      $(".outputDisplay").text(arr);
    })
  })
});
