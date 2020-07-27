//var statement declares a variable. 
//Variables are containers for storing information. 
//Creating a variable in JavaScript is called "declaring" a variable: var carName; 
//After the declaration, the variable is empty (it has no value)

//variables for the start of the quiz:
var startBtn = document.querySelector("#quizStart");
var timesUp = document.querySelector("#timesUp");
var quiz = document.querySelector("#quizContainer");
var problem = document.querySelector("#questions");
var multiA = document.querySelector("#A");
var multiB = document.querySelector("#B");
var multiC = document.querySelector("#C");
var multiD = document.querySelector("#D");
var score = document.querySelector("#score");
timesUp.style.display= "none";
quiz.style.display= "none";
// var pg1 = document.querySelector("#startQuiz");
// var pg2 = document.querySelector("#multChoice");
// var timer = document.querySelector("#timer");
// //variables for what happens if there time runs out

// var score = document.querySelector("showScore");
// //variables for user's score

// var saveUserScore = document.querySelector("#saveUserScore");
// var initials = document.querySelector("#userInt");
// var score = document.querySelector("#scoreResults");
// //variables for the highest score and quiz restart
// var pg4 = document.querySelector("#highestScore");
// var userinitials = document.querySelector("#initials");
// var restartQuiz = document.querySelector("#restartQuiz");
// //variables for the mult choice quiz

// var finalScore = document.querySelector("finalResultsMsg");
// //quiz questions
var correct = 0;
var incorrect = 0; 
var currentQuestion = 0;
var buttonquestions = [
    {
        question: "What is the viewport meta tag?",
        choiceA: "Responsive tag for mobile devices",
        choiceB: "A semantic element",
        choiceC: "An html response",
        choiceD: "An html response",
        correct: "A"
    },


    {
        question: "What does JSON stand for?",
        choiceA: "JavaScript Order Notation",
        choiceB: "JavaScript Object Notation",
        choiceC: "Jupiter Saturn Outer Nebula",
        choiceD: "JavaScript Obituary Notation",
        correct: "B"
    },


    {
        question: "Does every HTML page begin as static content?",
        choiceA: "No, not every HTML page begins as static content.",
        choiceB: "Yes, every HTML page begins as static content.",
        choiceC: "Sometimes, based on the content.",
        choiceD: "Sometimes, after we modify the DOM and change the static code in real time.",
        correct: "B"
    },


    {
        question: "Methods that find elements in the DOM tree are called?",
        choiceA: "variables",
        choiceB: "queries",
        choiceC: "elements",
        choiceD: "none of the above",
        correct: "B"
    },

    {
        question: "to transform block elements into in-line elements, we use a CSS property called?",
        choiceA: "sidebar",
        choiceB: "float",
        choiceC: "layout",
        choiceD: "all of the above",
        correct: "B"
    },

];

function startQuiz(){
    startBtn.style.display="none";
    quiz.style.display="block";
    displayQuiz()
}

function displayQuiz(){
    problem.innerHTML=buttonquestions[currentQuestion].question
    multiA.innerText=buttonquestions[currentQuestion].choiceA
    multiB.innerText=buttonquestions[currentQuestion].choiceB
    multiC.innerText=buttonquestions[currentQuestion].choiceC
    multiD.innerText=buttonquestions[currentQuestion].choiceD

}

function validateAnswer(){
    var userchoice = this.getAttribute("id");
    if(userchoice == buttonquestions[currentQuestion].correct){
        correct++
    }
    else{
        incorrect++
    }
    score.innerText="correct:" + correct + " incorrect:" + incorrect


}
// //Trigger the first question after the "Click to Begin"start button is clicked.
// var answer = "";
// console.log(answer);
// var seconds = 60;
// var correct = 0;
// var currentQuestion = 0;
// var timeInterval;

startBtn.addEventListener("click", startQuiz)

   
// //for timer countdown:
// setInterval(function () {
//     timerInterval = setInterval(function () {
//         seconds--;
//         clock.display = seconds;
//         console.log(seconds);

//         if (seconds === 0) {
//             clearInterval(timerInterval);
//             pg2.setAttribute("style", "display:none");
//             console.log(pg2);
//             timesUp.setAttribute("style", "display:block");
//         }
//     }, 1000);
//         choiceA.addEventListener("click", function(){
//             answer = "A";
//             console.log(answer);
//             checkTheAnswer();
//             currentQuestion++
//             setTimeout (function() {displayQuestion();}, 750);

//         })

//         choiceB.addEventListener("click", function(){
//             answer = "B";
//             console.log(answer);
//             checkTheAnswer();
//             currentQuestion++
//             setTimeout (function() {displayQuestion();}, 750);

//         })

//         choiceC.addEventListener("click", function(){
//             answer = "B";
//             console.log(answer);
//             checkTheAnswer();
//             currentQuestion++
//             setTimeout (function() {displayQuestion();}, 750);

//         })
    
//         choiceD.addEventListener("click", function(){
//             answer = "B";
//             console.log(answer);
//             checkTheAnswer();
//             currentQuestion++
//             setTimeout (function() {displayQuestion();}, 750);

//         })
// function displayQuestion(){
//     console.log(quiz[currentQuestion]);
//     quizOver();
//     result.textContent = "";
//     problem.textContent = quiz[currentQuestion].question;
//     choiceA.textContent = quiz[currentQuestion].choiceA;
//     choiceB.textContent = quiz[currentQuestion].choiceB;
//     choiceC.textContent = quiz[currentQuestion].choiceC;
//     choiceD.textContent = quiz[currentQuestion].choiceD;

// function checkTheAnswer(){
//     console.log(answer);
//     if (quiz[currentQuestion].correct === answer) {
//         result.textContent = "That's correct!";
//         correct++;
//         console.log(correct);

//     }
//     else{
//         result.textContent = "That's incorrect!";
//         seconds = seconds -5;
//     }
// }
// }

// function quizOver(){
//     if(currentQuestion>quiz.length-1){
//         clearInterval(timerInterval);
//         pg2.setAttribute("style", "display:none");
//         console.log(pg2);
//         pg3.setAttribute("style", "display:none");
//         score.textContent = correct + "/5";
//         extraSeconds.textContent = seconds + " " + "seconds leftover";

//     }
// }
     
//  addEventListener("click", function () {
//     pg1.setAttribute("style", "display:none");
    //for loop
    // for (var i = 0; i < buttonquestions.length; i++) {
    //     var response = window.buttonquestions(quizQuestions[i].prompt);
    //     if (response == buttonquestions[i].answer) {
    //         score++;
    //         alert("Correct!");
    //     } else {
    //         alert("Incorrect.");