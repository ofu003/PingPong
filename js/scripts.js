//Declares universal variable to store numbers
var arrayOfNumbers = [];
//PingPong function populates arrayOfNumbers and assigns string values to numbers
var PingPong=function(userInput){
  //Pushes numbers from 1 up to userInput value into //arrayOfNumbers
  for (var i=1; i<=userInput; i++){
  arrayOfNumbers.push(i);
  }
  //Assigns string values to numbers
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
  //Submit function stores input, calls PingPong function, and displays results
  $("form#form").submit(function(event){
    event.preventDefault();
    //Stores input as variable
    var userInput=$("#input").val();
    //Calls PingPong function
    PingPong(userInput);

    //Displays arrayOfNumbers after it has passed through PingPong function
    arrayOfNumbers.forEach(function(number){
    $(".outputDisplay").append("<li>"+number+"</li>");
    $("#outputBox").show();
    $("#reset").show();
    });
  });
    //Reset function clears page 
    $("#reset").click(function(){
      userInput="";
      arrayOfNumbers=[];
      $("#reset").hide();
      $(".outputDisplay").text(arrayOfNumbers);
      $("#outputBox").hide();
    })
});
