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
var noMoreTime = document.querySelector("#timeranout");
timesUp.style.display = "none";
quiz.style.display = "none";
var highest = document.querySelector("#highestScore");

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
        question: "To transform block elements into in-line elements, we use a CSS property called?",
        choiceA: "sidebar",
        choiceB: "float",
        choiceC: "layout",
        choiceD: "all of the above",
        correct: "B"
    },
];

function startQuiz() {
    startBtn.style.display = "none";
    quiz.style.display = "block";
    displayQuiz()
}

timeleft = 60;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "finished";
    } else {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";

    }
    timeleft -= 1;
}, 1000);


function displayQuiz() {
    problem.innerHTML = buttonquestions[currentQuestion].question
    multiA.innerText = buttonquestions[currentQuestion].choiceA
    multiB.innerText = buttonquestions[currentQuestion].choiceB
    multiC.innerText = buttonquestions[currentQuestion].choiceC
    multiD.innerText = buttonquestions[currentQuestion].choiceD

}

function validateAnswer() {
    var userchoice = this.getAttribute("id");
    if (userchoice == buttonquestions[currentQuestion].correct) {
        correct++
    }
    else {
        incorrect++
    }
    score.innerText = "correct: " + correct + " incorrect: " + incorrect
    if (currentQuestion < buttonquestions.length - 1) {
        currentQuestion++
        displayQuiz()
    }
    else {
        showResults()
    }
}

startBtn.addEventListener("click", startQuiz)
multiA.addEventListener("click", validateAnswer)
multiB.addEventListener("click", validateAnswer)
multiC.addEventListener("click", validateAnswer)
multiD.addEventListener("click", validateAnswer)

function showResults() {
    console.log("showResults");
    timesUp.style.display = "block";
    quiz.style.display = "none";
    noMoreTime.innerHTML = "correct: " + correct + " incorrect: " + incorrect
}


function highScores() {
    localStorage.setItem("highScores", JSON.stringify([]));
    console.log(JSON.parse(localStorage.getItem("highScores")));
    console.log(highScores);
}
