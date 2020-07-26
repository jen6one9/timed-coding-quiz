//var statement declares a variable. 
//Variables are containers for storing information. 
//Creating a variable in JavaScript is called "declaring" a variable: var carName; After the declaration, the variable is empty (it has no value)

var answers []


//variables for the start of the quiz
var startBtn =document.querySelector("#click-here-to-begin");
var pg1 = document.querySelector(#"Question #1.");


//variables describing all 10 questions that will be displayed on the UI
var pg2 = document.querySelector("#multChoice");
var timer = document.querySelector("#timer");

//variables describing what happens if there time runs out
var timesUp = document.querySelector("#timesUp");
var score = document.querySelector("showScore");

//variables describing user's score
var pg3 = document.querySelector("#score");
var saveUserScore = document.querySelector("#saveUserScore");
var initials = doucment.querySelector("#userInitials");
var score = document.querySelector("#scoreResults");

//variables describing highest score
var pg4 = document.querySelector("#highestScore");
var userinitials = document.querySelector("#initials");
var restartQuiz = document.querySelector("#restartQuiz");

//variables for the test takers
var problem = document.querySelector("#question");
var multiA = document.querySelector("#choiceA");
var multiB = document.querySelector("#choiceB");
var multiC = document.querySelector("#choiceC");
var multiD = document.querySelector("#choiceD");
var finalScore = document.querySelector("finalResultsMsg");




//Trigger the first question after the "Click to Begin"start button is clicked.
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("quizStart").innerHTML = "Question #1.";
  });



//questions array
var buttonquestions = [
    {
        question1: "What is the viewport meta tag?";
        choiceA: "Responsive tag for mobile devices";
        choiceB: "A semantic element";
        choiceC: "An html response";
        choiceD: "An html response";
       
]

 

//for timer count down



   
}

//for loop
for (var i = 0; i < questions.length; i++) {
    var response = window.buttonquestions(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}
alert("you got" + score + " / " + questions.length.numberofquestions)