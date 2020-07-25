//questions array
var buttonquestions = [
    {
        prompt: "What is a meta response tag?\n(a) Responsive tag for mobile devices\n\(b) A semantic element\n(c) html response",
        answer: "a"
    }
]
var answers []
var score = 0;
//Prompt the first question after the "Click to Begin"start button is clicked.


//for timer
function setup () 

//for loop
for (var i = 0; i < questions.length; i++) {
    var response = window.buttonquestions(questions[i].prompt);
    if(response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}
    alert("you got" +  score + " / " + questions.length.numberofquestions)