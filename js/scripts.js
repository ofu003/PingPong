//declare universal variable to store numbers
var arrayOfNumbers = [];
//PingPong function populates arrayOfNumbers and assigns string values to numbers
var PingPong=function(userInput){
  //push numbers from 1 up to userInput value into //arrayOfNumbers
  for (var i=1; i<=userInput; i++){
  arrayOfNumbers.push(i);
  }
  //assigns string values to numbers
  arrayOfNumbers.forEach(function(number){
    if (number%15==0){
      arrayOfNumbers[(number-1)]="Ping-Pong";
    }
    else if (number%5==0){
      arrayOfNumbers[(number-1)]="Pong";
    }
    else if(number%3==0){
      arrayOfNumbers[(number-1)]="Ping";
    }
    else {
    }
  });
};



$(function(){
  //submit stores input, calls PingPong function, displays results,
  $("form#form").submit(function(event){
    event.preventDefault();
    //store input as variable
    var userInput=$("#input").val();
    //call PingPong function
    PingPong(userInput);

    //display arrayOfNumbers after it has passed through PingPong function
    arrayOfNumbers.forEach(function(number){
    $(".outputDisplay").append("<li>"+number+"</li>");
    $("#outputBox").show();
    $("#reset").show();
    });
  });
    //When reset button is pressed, the below happens
    $("#reset").click(function(){
      userInput="";
      arrayOfNumbers=[];
      $(".outputDisplay").text(arrayOfNumbers);
      $("#reset").hide();
      $("#outputBox").hide();
    })
});
