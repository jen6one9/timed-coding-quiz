//Prompt the first question after the "Click to Begin"start button is clicked.
function myFunction() {
    document.getElementById("button").innerHTML = "True or False placeholder";






//questions array
var buttonquestions = [
    {
        prompt: "What is a meta response tag?\n(a) Responsive tag for mobile devices\n\(b) A semantic element\n(c) html response",
        answer: "a"
    }
]
var answers []
var score = 0;
setInterval(timeIt, 1000);


//for timer count down
var counter = 0;
var timeleft = 60;

function convertSeconds(s) {
    var min = floor(s / 60);

    var sec = s % 60;
    return min + ':'sec;
}

function setup() {
    noCanvas();
    
    var params = getURLParams ();
    if (params.minute){
        var min =params.minute;
        timeleft = min * 60;
    }

    var timer = select('timer');
    timer.html(time - counter);

    function timeIt() {
        counter++;
        timer.html(counter);
    }


   
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