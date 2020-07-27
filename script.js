//var statement declares a variable. 
//Variables are containers for storing information. 
//Creating a variable in JavaScript is called "declaring" a variable: var carName; 
//After the declaration, the variable is empty (it has no value)

//variables for the start of the quiz:
var startBtn = document.querySelector("#click-here-to-begin");
var pg1 = document.querySelector("#startQuiz");
var pg2 = document.querySelector("#multChoice");
var timer = document.querySelector("#timer");
//variables for what happens if there time runs out
var timesUp = document.querySelector("#timesUp");
var score = document.querySelector("showScore");
//variables for user's score
var pg3 = document.querySelector("#score");
var saveUserScore = document.querySelector("#saveUserScore");
var initials = document.querySelector("#userInt");
var score = document.querySelector("#scoreResults");
//variables for the highest score and quiz restart
var pg4 = document.querySelector("#highestScore");
var userinitials = document.querySelector("#initials");
var restartQuiz = document.querySelector("#restartQuiz");
//variables for the mult choice quiz
var problem = document.querySelector("#question");
var multiA = document.querySelector("#choiceA");
var multiB = document.querySelector("#choiceB");
var multiC = document.querySelector("#choiceC");
var multiD = document.querySelector("#choiceD");
var finalScore = document.querySelector("finalResultsMsg");
//quiz questions 
var buttonquestions = [
    {
        question1: "What is the viewport meta tag?",
        choiceA: "Responsive tag for mobile devices",
        choiceB: "A semantic element",
        choiceC: "An html response",
        choiceD: "An html response",
        correct: "A"
    },


    {
        question2: "What does JSON stand for?",
        choiceA: "JavaScript Order Notation",
        choiceB: "JavaScript Object Notation",
        choiceC: "Jupiter Saturn Outer Nebula",
        choiceD: "JavaScript Obituary Notation",
        correct: "B"
    },


    {
        question3: "Does every HTML page begin as static content?",
        choiceA: "No, not every HTML page begins as static content.",
        choiceB: "Yes, every HTML page begins as static content.",
        choiceC: "Sometimes, based on the content.",
        choiceD: "Sometimes, after we modify the DOM and change the static code in real time.",
        correct: "B"
    },


    {
        question4: "Methods that find elements in the DOM tree are called?",
        choiceA: "variables",
        choiceB: "queries",
        choiceC: "elements",
        choiceD: "none of the above",
        correct: "B"
    },

    {
        question5: "to transform block elements into in-line elements, we use a CSS property called?",
        choiceA: "sidebar",
        choiceB: "float",
        choiceC: "layout",
        choiceD: "all of the above",
        correct: "B"
    },

];

//Trigger the first question after the "Click to Begin"start button is clicked.
var answer = "";
console.log(answer);
var seconds = 120;
var correct = 0;
var currentQuestion = 0;
var timeInterval;


document.getElementById("quizStart").addEventListener("click", function () {
    pg1.setAttribute("style", "display:none");
    console.log(pg1);
    pg2.setAttribute("style", "display:block");
    correct = 0;
    currentQuestion = 0;
    countdown();
    displayQuestion();
});
console.log("quizStart")




//for timer countdown:
   setInterval(function()){
        seconds--;
        console.log(seconds);
        if (seconds === 0){
            clearInterval(timerInterval);
            pg2.setAttribute("style", "display:none");
            console.log(pg2);
            timesUp.setAttribute("style", "display:block");
        }
    }, 1000;
}


//for loop
for (var i = 0; i < bttonquestions.length; i++) {
    var response = window.buttonquestions(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}
alert("you got" + score + " / " + questions.length.numberofquestions)